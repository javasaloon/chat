// replace these values with those generated in your TokBox Account
var apiKey = "46160412";
var sessionId = "1_MX40NjE2MDQxMn5-MTUzMjU3NDUzMzA4OH5DU1NPbEQ2N0NLa0crS1J2U1MrVDkwcm5-fg";
var token = "T1==cGFydG5lcl9pZD00NjE2MDQxMiZzaWc9NTYwMWU0MjgxMTY1YWFlZGQ3ODNhNTRmYzQ3NDVhYzRlMjE3NTQzNzpzZXNzaW9uX2lkPTFfTVg0ME5qRTJNRFF4TW41LU1UVXpNalUzTkRVek16QTRPSDVEVTFOUGJFUTJOME5MYTBjclMxSjJVMU1yVkRrd2NtNS1mZyZjcmVhdGVfdGltZT0xNTMyNTc1MTAzJm5vbmNlPTAuMDE1NDQ3NDE0MTIxMDc1MTk4JnJvbGU9c3Vic2NyaWJlciZleHBpcmVfdGltZT0xNTMzMTc5OTAyJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";
// Handling all of our errors here by alerting them
function handleError(error) {
    if (error) {
      alert(error.message);
    }
  }
  
  // (optional) add server code here
  initializeSession();
  
  function initializeSession() {
    var session = OT.initSession(apiKey, sessionId);
  
    // Subscribe to a newly created stream
    session.on('streamCreated', function(event) {
      session.subscribe(event.stream, 'subscriber', {
        insertMode: 'append',
        width: '100%',
        height: '100%'
      }, handleError);
    });
  
    // Create a publisher
    var publisher = OT.initPublisher('publisher', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  
    // Connect to the session
    session.connect(token, function(error) {
      // If the connection is successful, initialize a publisher and publish to the session
      if (error) {
        handleError(error);
      } else {
        session.publish(publisher, handleError);
      }
    });
  }
