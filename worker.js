// this is a Node.js module. The function gets executed 
// on Hoodie Server startup.
module.exports = function(hoodie, doneCallback) {

  hoodie.task.on('change:dream', function (db, change) {
    if (!change.doc.complete && !change.deleted) {
      handleNewDream(db, change.doc);
    }
  })

  function handleNewDream(db, dream) {
    makeDreamComeTrue(dream, function(error, trueDream) {
      if (error) {
        dream.error = error;
        return hoodie.database(db).update('$dream', dream);
      }

      hoodie.database(db).update('$dream', trueDream, handleDreamUpdate);
    })
  }

  function makeDreamComeTrue(dream) {}
  function handleDreamUpdate(error) {}

  doneCallback();
};
