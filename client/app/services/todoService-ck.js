(function(){"use strict";angular.module("todo").service("todoService",function(e,t){return{getCategories:function(){var n=e.defer();t.get("/api/category").then(function(e){n.resolve(e)});return n.promise},getCategory:function(n){var r=e.defer();t.get("/api/category/"+n).then(function(e){r.resolve(e)});return r.promise},saveCategory:function(n){var r=e.defer(),i=n._id?"/api/category/"+n._id:"/api/category";t.post(i,n).then(function(e){r.resolve(e)});return r.promise},getCategoryProjects:function(n){var r=e.defer();t.get("/api/project/in_category/"+n).then(function(e){r.resolve(e)});return r.promise},getTasks:function(n){var r=e.defer();t.get("/api/tasks").then(function(e){r.resolve(e)});return r.promise}}})})();