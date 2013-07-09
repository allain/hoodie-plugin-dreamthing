// this is a Node.js module. The function gets executed 
// on Hoodie Server startup.
module.exports = function(hoodie, doneCallback) {

  hoodie.task.on('dream:add', handleNewDream)

  function handleNewDream(database, dream) {
    makeDreamComeTrue(dream, function(error, trueDream) {
      if (error) {
        dream.error = error;
        return hoodie.task.update('dream', dream);
      }

      hoodie.task.update('dream', trueDream, handleDreamUpdate);
    })
  }

  function makeDreamComeTrue(dream) {}
  function handleDreamUpdate(error) {}

  doneCallback();
};
