angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('https://obscure-river-31804.herokuapp.com/api/listings');
    },

	create: function(listing) {
	  return $http.post('https://obscure-river-31804.herokuapp.com/api/listings', listing);
    },

    delete: function(id) {
	   /*
        return result of HTTP delete method
       */
       return $http.delete('https://obscure-river-31804.herokuapp.com/api/listings/' + id);
    }
  };

  return methods;
});
