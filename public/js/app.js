// replace these values with those generated in your TokBox Account
var apiKey = "46160412";
var sessionId = "1_MX40NjE2MDQxMn5-MTUzMjU4Mjg0MDE4N342clg0bkkvV2xYVHRzamhsNjU3U044eDV-fg";
var token = "T1==cGFydG5lcl9pZD00NjE2MDQxMiZzaWc9YjZiYTAwYzAxY2UyMjE3MDNiZThjMTQxMDkyY2FkMzg3MzZiODZiNzpzZXNzaW9uX2lkPTFfTVg0ME5qRTJNRFF4TW41LU1UVXpNalU0TWpnME1ERTROMzQyY2xnMGJra3ZWMnhZVkhSemFtaHNOalUzVTA0NGVEVi1mZyZjcmVhdGVfdGltZT0xNTMyNTgyOTM1Jm5vbmNlPTAuMjU3ODc1MTc0ODA1NjgxMSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTMzMTg3NzM1JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";
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
