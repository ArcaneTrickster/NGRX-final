import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import * as fromApp from "../store/app.reducer";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
})
export class RecipesComponent implements OnInit, OnDestroy {
  private storeSub: Subscription;
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.storeSub = this.store.select("auth").subscribe((authState) => {
      console.log(authState);
    });
  }
  ngOnDestroy() {
    this.storeSub.unsubscribe();
  }
}
