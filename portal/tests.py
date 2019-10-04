from django.test import TestCase, Client

class IndexTest(TestCase):
    def test_http(self):
        client = Client()
        response = client.get('')
        self.assertEqual(response.status_code, 404)
