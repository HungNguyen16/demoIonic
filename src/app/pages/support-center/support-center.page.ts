import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StepSupportPageEnum } from '../../models/step-support-page-enum';

@Component({
  selector: 'app-support-center',
  templateUrl: './support-center.page.html',
  styleUrls: ['./support-center.page.scss'],
})
export class SupportCenterPage implements OnInit {
  stepPage: number;
  stepSupportPageEnum = StepSupportPageEnum;
  subscribe: Subscription = new Subscription();
  constructor(private route: ActivatedRoute,
              private router: Router
             ) { }

  ngOnInit() {
    this.subscribe.add(this.setStepOnInit());
    // this.setStepOnInit();
  }
  changeStepQueryParams(step: number): void {
    this.router.navigate(['/support-center'], {queryParams: {step: step.toString()}});
  }
  setStepOnInit(): any {
    this.route.queryParams
      .subscribe(params => {
        const stepStr = params.step;
        let step = parseInt(stepStr, 10);
        if (!(step > 0) || isNaN(step)) {
          step = this.stepSupportPageEnum.SimRegistration;
        }
        this.checkActiveStep(step);
      });
  }
  checkActiveStep(step: number): any {
    console.log(step);
    this.stepPage = step;
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    if (this.subscribe != null) {
      this.subscribe.unsubscribe();
    }
  }
}
