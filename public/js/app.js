// replace these values with those generated in your TokBox Account
var apiKey = "46160412";
var sessionId = "1_MX40NjE2MDQxMn5-MTUzMjU3NDUzMzA4OH5DU1NPbEQ2N0NLa0crS1J2U1MrVDkwcm5-fg";
var token = "T1==cGFydG5lcl9pZD00NjE2MDQxMiZzaWc9Y2ExNTJmN2RhMmM2ZWY4MTNiNzAzN2Y0NjUxZGEwZGRlZTZlMmVkNjpzZXNzaW9uX2lkPTFfTVg0ME5qRTJNRFF4TW41LU1UVXpNalUzTkRVek16QTRPSDVEVTFOUGJFUTJOME5MYTBjclMxSjJVMU1yVkRrd2NtNS1mZyZjcmVhdGVfdGltZT0xNTMyNTc0NTc0Jm5vbmNlPTAuMjUwNzUxNjY2MzU3MzQ5NDcmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUzMzE3OTM3MyZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";

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
