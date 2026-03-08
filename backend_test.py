import requests
import sys
from datetime import datetime
import json

class THCAPITester:
    def __init__(self, base_url="https://website-maker-219.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        test_headers = {'Content-Type': 'application/json'}
        if headers:
            test_headers.update(headers)

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=test_headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=test_headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    if isinstance(response_data, list):
                        print(f"   Response: List with {len(response_data)} items")
                    elif isinstance(response_data, dict):
                        print(f"   Response: Dict with keys: {list(response_data.keys())}")
                except:
                    print(f"   Response: Non-JSON content")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    error_data = response.json()
                    print(f"   Error: {error_data}")
                except:
                    print(f"   Error: {response.text}")

            return success, response.json() if success and response.content else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_root_endpoint(self):
        """Test API root endpoint"""
        return self.run_test(
            "API Root",
            "GET",
            "api/",
            200
        )

    def test_get_events(self):
        """Test GET /api/events endpoint"""
        success, response = self.run_test(
            "Get All Events",
            "GET", 
            "api/events",
            200
        )
        
        if success and isinstance(response, list):
            print(f"   Found {len(response)} events")
            if len(response) > 0:
                event = response[0]
                required_fields = ['id', 'title', 'format', 'date', 'location', 'audience', 'description', 'is_upcoming']
                for field in required_fields:
                    if field not in event:
                        print(f"   ⚠️  Missing field '{field}' in event data")
                        return False
                print(f"   ✅ Event structure valid - sample: {event['title']}")
        
        return success

    def test_get_upcoming_events(self):
        """Test GET /api/events with upcoming filter"""
        success, response = self.run_test(
            "Get Upcoming Events",
            "GET",
            "api/events?upcoming=true", 
            200
        )
        
        if success and isinstance(response, list):
            upcoming_count = len(response)
            print(f"   Found {upcoming_count} upcoming events")
            if upcoming_count > 0:
                # Verify all events are upcoming
                for event in response:
                    if not event.get('is_upcoming', False):
                        print(f"   ⚠️  Non-upcoming event in upcoming filter: {event['title']}")
                        return False
                print(f"   ✅ All events are properly marked as upcoming")
        
        return success

    def test_get_past_events(self):
        """Test GET /api/events with past filter"""
        success, response = self.run_test(
            "Get Past Events", 
            "GET",
            "api/events?upcoming=false",
            200
        )
        
        if success and isinstance(response, list):
            past_count = len(response)
            print(f"   Found {past_count} past events")
            if past_count > 0:
                # Verify all events are past
                for event in response:
                    if event.get('is_upcoming', False):
                        print(f"   ⚠️  Upcoming event in past filter: {event['title']}")
                        return False
                print(f"   ✅ All events are properly marked as past")
        
        return success

    def test_partner_inquiry_submission(self):
        """Test POST /api/partner-inquiry endpoint"""
        test_data = {
            "name": f"Test User {datetime.now().strftime('%H%M%S')}",
            "organisation": "Test Organization",
            "email": "test@example.com",
            "interest": "Co-host an Event",
            "message": "This is a test inquiry for API validation."
        }
        
        success, response = self.run_test(
            "Partner Inquiry Submission",
            "POST",
            "api/partner-inquiry", 
            200,
            data=test_data
        )
        
        if success:
            # Validate response structure
            required_fields = ['id', 'name', 'organisation', 'email', 'interest', 'message', 'created_at']
            for field in required_fields:
                if field not in response:
                    print(f"   ⚠️  Missing field '{field}' in response")
                    return False
            
            # Validate data integrity
            if response['name'] != test_data['name']:
                print(f"   ⚠️  Name mismatch: {response['name']} != {test_data['name']}")
                return False
            
            if response['email'] != test_data['email']:
                print(f"   ⚠️  Email mismatch: {response['email']} != {test_data['email']}")
                return False
                
            print(f"   ✅ Partner inquiry created with ID: {response['id']}")
        
        return success

    def test_partner_inquiry_validation(self):
        """Test partner inquiry validation with missing fields"""
        invalid_data = {
            "name": "",  # Empty name should fail
            "organisation": "Test Org",
            "email": "test@example.com",
            "interest": "Co-host an Event"
        }
        
        success, response = self.run_test(
            "Partner Inquiry Validation (should fail)",
            "POST",
            "api/partner-inquiry",
            422,  # Expect validation error
            data=invalid_data
        )
        
        # In this case, success means we got the expected 422 error
        return success

def main():
    print("🧪 Starting THC Backend API Tests")
    print("=" * 50)
    
    tester = THCAPITester()
    
    # Run all tests
    test_results = []
    
    test_results.append(tester.test_root_endpoint())
    test_results.append(tester.test_get_events()) 
    test_results.append(tester.test_get_upcoming_events())
    test_results.append(tester.test_get_past_events())
    test_results.append(tester.test_partner_inquiry_submission())
    test_results.append(tester.test_partner_inquiry_validation())
    
    # Print summary
    print("\n" + "=" * 50)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All backend API tests passed!")
        return 0
    else:
        failed = tester.tests_run - tester.tests_passed
        print(f"❌ {failed} test(s) failed")
        return 1

if __name__ == "__main__":
    sys.exit(main())