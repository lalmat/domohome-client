new Vue({
  el:"#cmdPanel",
  data: {
    door_lock:false
  },
  compiled : function () {
    var t=this;
    $.request('get', domoHomeAPI+'/getItem?item=door_lock').then(function(data) {
      t.door_lock = ($.parseJSON(data).state==1);
    });
  },
  methods : {
    stateToggle: function() {
      var t=this;
      $.request('get', domoHomeAPI+'/setItem?item=door_lock&state='+(this.door_lock?0:1)).then(function(data) {
        t.door_lock = ($.parseJSON(data).state==1);
      });
    }
  }
});

