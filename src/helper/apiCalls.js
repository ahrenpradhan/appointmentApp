import axios from "axios";

let settings = {
    url: "",
    method: "GET",
    timeout: 0,
    headers: {
        accept: "application/json",
        Authorization:
        "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjhEMkE0MTczM0QwN0JBNkU2RTYwNTZFRUJDRThDRkQyMDc0NThCMDUiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJqU3BCY3owSHVtNXVZRmJ1dk9qUDBnZEZpd1UifQ.eyJuYmYiOjE1OTAwNDcyMDYsImV4cCI6MTU5MDEzMzYwNiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5iaXRwb2QuaW8vYXV0aCIsImF1ZCI6WyJodHRwczovL2xvZ2luLmJpdHBvZC5pby9hdXRoL3Jlc291cmNlcyIsIk5vdGlmaWNhdGlvbiIsIlNoYXJlZCJdLCJjbGllbnRfaWQiOiJndHYrcTA0bHUvbDVaZkt5MHZXRkpqRHI5RzdHc0RhV1BpVml3cEowWUpzPSIsInN1YiI6ImFocmVuQGJpdHBvZC5pbyIsImF1dGhfdGltZSI6MTU5MDA0NzIwNSwiaWRwIjoibG9jYWwiLCJzY29wZSI6WyJOb3RpZmljYXRpb24iLCJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJub3RpZmljYXRpb24iLCJiYWFzIiwib2ZmbGluZV9hY2Nlc3MiLCJub3RpZmljYXRpb24iLCJiYWFzIiwib2ZmbGluZV9hY2Nlc3MiLCJub3RpZmljYXRpb24iLCJiYWFzIiwib2ZmbGluZV9hY2Nlc3MiLCJub3RpZmljYXRpb24iLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.PzYbxLAtuO6H24auoJzWUFAcl53F1iCl45-pF1n87Eh0SEB-auRrOY3D0r7Agx5OnfRjbBcsWSuiEEOKr4ZqID1VAyuiBcBLEz0oY0P8h1_tibjUywZm2vawQSflqYBHRpSW5IWVxhJ8XrTC4hFu857KH7guYU-rYxknomGg7VkAqu3pbRMXl7uDvCjJFyHbsGS5NO0H7rvHHIktaXQTQbUQ7xqE6A9tjsRgPYEjdQrHuknjGhhnwPkdmHIB8G6J4pcttMOvDEh9UVQpx1wM8bprL27eKTWiqYy0p33jrnce0I858ToCEWXmcLO8FnMnJpFIEvT6hC3kNHclIjsPPg",
        resolver: "requestHeader",
        "x-org-id": "1",
    },
};

const getSettingObject = (url, method) => {
    return { ...settings, url, method };
};

const getEventDetails = async () => {
    const setting = getSettingObject("https://appointment.test.bitpod.io/svc/api/Events","GET");
    const Response = await axios.get(setting.url,{'headers':setting.headers});
    return Response.data;
};
const getBookingDetails = async (id) => {
    const setting = getSettingObject("https://appointment.test.bitpod.io/svc/api/Events/"+id+"/BookingList","GET");
    const Response = await axios.get(setting.url,{'headers':setting.headers});
    return Response.data;
};

export { getEventDetails, getBookingDetails };
