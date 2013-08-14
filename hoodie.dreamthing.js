// this will provide a new API looking like
// 
//     hoodie.dreamthing.add( 'something' )
//     .then( handleDreamComeTrue, handleDreamError )
// 
Hoodie.extend(function(hoodie) {

  // add new dream tasks and resolve when the worker made 
  // them come true or errored when trying it.
  function make( what ) {
    var defer = hoodie.defer();

    hoodie.task.add('dream', { about: what})
    .done( function(dream) {
      hoodie.task.on('remove:dream:'+dream.id, defer.resolve)
      hoodie.task.on('error:dream:'+dream.id, defer.reject)
    })
    .fail( defer.reject )

    return defer.promise()
  }

  hoodie.make = make;
});
