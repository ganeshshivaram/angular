																					
																					******** ----- ROUTING ----- ********
-- Basics --

* For setting up routing, modify app.module.ts to include a const appRoute of type Routes imported from "@angular/router". appRoutes is of an array type which holds an object with {path: <>, component: <>}
* Include RouterModule.forRoots(appRoutes) in the import section
* Have a <router-outlet></router-outlet> where we can load the routes in the html.
* Use routerLink="/<path>" in html to activate the route. routerLink can also be used with property binding. ex. [routerLink] = "['/users', '/something'];
* If you don't add / to routerLink, it appends to existing route as relative path. So don't use "/" in nested routes. While defining main routes, add a "/" (absolute path).
* To highlight current selected tab, use routerLinkActive="active". To match exact route, use [routerLinkActiveOptions]="{exact: true}" for implementing default route.

-- Route programmatically --

* Inject router: Router imported from "@angular/router" into the component
* Use this.router.navigate(['/servers']);
* To use a path relative to the path you want to navigate, use this.router.navigate(['/servers'], {relativeTo: this.route}). this.route will be of type ActivatedRoute


-- Pass parameters to route --

1. Configure route to accept path segments: Ex.{ path: 'users/:id/:name', component: UserComponent }
2. To fetch data, use route: ActivatedRoute and use this.route.snapshot.params["id"];
3. If you want to reload a page from the same page by changing the route params, you need to use observables

ex: this.route.params.subscribe((params: Params) => {
      this.user = {
        name: params["name"],
        id:   params["id"]
      }
    });
	
4. Since subscribe is given by a thrid party component, you can delete it to enhance memory management. To do this,
    - Include paramsSubscription: Subscription imported from "rxjs/Subscription";	
	- Implement ngOnDestroy and use  this.paramsSubscription.unsubscribe();

	
5. To add query params or fragments, you can do it in html as below:

    <a  href="#"
        [routerLink]="['/servers', 5, 'edit']"
        [queryParams]="{allowEdit: '1'}"
        fragment="loading..."
        class="list-group-item"
        *ngFor="let server of servers">
        {{ server.name }}
      </a>

Programmatically:

this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});  

6. Retrieve params using this.route.snapshot.queryParams

7. You can nest routes within one another using the children attribute

Ex: { path: 'users', component: UsersComponent,
    children: [ { path: ':id/:name', component: UserComponent} ]
  }
  
8. Pass on query params to another route, use {queryParamsHandling: 'preserve'} or 'merge' in router.navigate()

9. path: '**' to redirect to not found


-- Route Guard --

1. Route guard allows you to protect your route.
2. Its a service that implements canActivate (for main route) and canActivateChild (for child routes).
3. Upon resolving a promise inside this method, it decides whether to navigate or not based on the boolean value returned by the promise.
4. For every route definition plug the guard. ex: canActivate: [AuthGaurd]
5. canDecativate is used to decide what happens after a route is triggered. Ex : To show flash messages
6. data attribute is used to pass static data in route
7. resolve is used to pass dynamic data to route