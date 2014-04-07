'use strict';

/* Directives */

moviecatApp.directive('keyNavigation', function ($timeout) {
    return function (scope, element, attrs) {

        element.bind("keydown keypress", function (event) {
        	console.log(event);
            if (event.which === 38) {
                var target = $(event.target).prev();
                $(target).trigger('focus');
                element.removeClass('active');
                target.addClass('active');
            }
            if (event.which === 40) {
                var target = $(event.target).next();
                $(target).trigger('focus');
                element.removeClass('active');
                target.addClass('active');
            }
        });
    };
});


// Define our document-click directive. This will evaluate the
// given expression on the containing scope when the click
// event is triggered.
moviecatApp.directive(
    "bnDocumentClick",
    function( $document, $parse ){

        // I connect the Angular context to the DOM events.
        var linkFunction = function( $scope, $element, $attributes ){

            // Get the expression we want to evaluate on the
            // scope when the document is clicked.
            var scopeExpression = $attributes.bnDocumentClick;

            // Compile the scope expression so that we can
            // explicitly invoke it with a map of local
            // variables. We need this to pass-through the
            // click event.
            //
            // NOTE: I ** think ** this is similar to
            // JavaScript's apply() method, except using a
            // set of named variables instead of an array.
            var invoker = $parse( scopeExpression );

            // Bind to the document click event.
            $document.on(
                "click",
                function( event ){
                	//alert("click");
                    // When the click event is fired, we need
                    // to invoke the AngularJS context again.
                    // As such, let's use the $apply() to make
                    // sure the $digest() method is called
                    // behind the scenes.
                    $scope.$apply(
                        function(){

                            // Invoke the handler on the scope,
                            // mapping the jQuery event to the
                            // $event object.
                            invoker(
                                $scope,
                                {
                                    $event: event
                                }
                            );

                        }
                    );

                }
            );

            // TODO: Listen for "$destroy" event to remove
            // the event binding when the parent controller
            // is removed from the rendered document.

        };

        // Return the linking function.
        return( linkFunction );

    }
);
