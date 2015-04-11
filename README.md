# angular-dui

Declarative UI for Angular

## Abstract

The goal is to have a specification that can be used to define common layouts in
applications. It's currently implemented using AngularJS and Bootstrap but it
should be quite straightforward to implement it using other technologies.

## Getting started

    $ git clone https://github.com/beeman/angular-dui.git
    $ cd angular-dui
    $ npm install
    $ gulp serve

## Examples

At this moment there is one example that serves as a demo on how to use dui.

The application layout is specified in `templates/app.html`, the configuration
object is defined in `js/app.js`.

The following structure renders a layout with a header, footer, sidebar and a
main screen with one content item. 

    <dui-app>

        <dui-header> [ Branding and navigation ] </dui-header>

        <dui-content>

            <dui-sidebar> [ Sidebar navigation ] </dui-sidebar>

            <dui-main>

                <dui-screen>

                    <dui-screen-header> [ Item list ] </dui-screen-header>

                    <dui-screen-content>

                            <dui-box-header> [ Item title ] </dui-box-header>

                            <dui-box-content> [ Item content ] </dui-box-content>

                            <dui-box-footer> [ Item date ] </dui-box-footer>

                    </dui-screen-content>

                    <dui-screen-footer> [ Item paging ] </dui-screen-footer>

                </dui-screen>

            </dui-main>

        </dui-content>

        <dui-footer> [ Copyright and branding] </dui-footer>

    </dui-app>

## Customizing templates

There are multiple ways to override templates.

One of the options is to define a template in your HTML:

    <script type="text/ng-template" id="/templates/dui-footer.html">
        <footer class='dui-footer'>
           <h6 ng-bind-html='dui.footer.text'> </h6>
           <div ng-transclude></div>
           <h6>template defined in app.html</h6>
        </footer>
    </script>

Another option is to update the `$templateCache` in a controller:

    app.controller('MyCtrl', function ($templateCache) {

      $templateCache.put("/templates/dui-footer.html",
        "<footer class='dui-footer'> " +
        "   <h6 ng-bind-html='dui.footer.text'> </h6>" +
        "   <div ng-transclude></div>" +
        "   <h6>template defined in MyCtrl</h6>" +
        "</footer> ");

    });

A template added to `$templateCache` takes precedence over the other templates.