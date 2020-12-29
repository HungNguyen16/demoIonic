import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from '../../services/common.service';
import { UtilityPageTypeEnum, UtilityPageTypeSlugEnumVn } from '../../models/enum';
import { StepUtilityPageEnum } from '../../models/step-utility-page-enum';

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.page.html',
  styleUrls: ['./utilities.page.scss'],
})
export class UtilitiesPage implements OnInit {
  currentPage = 1;
  stepPage: number;
  utilityPageEnum = UtilityPageTypeEnum;
  stepUtilityPageEnum = StepUtilityPageEnum;
  subscribe: Subscription = new Subscription();
  constructor(private route: ActivatedRoute,
              private router: Router,
              private commonService: CommonService,
              private ref: ChangeDetectorRef,

              ) { }
  ngOnInit() {
    this.setStepOnInit();
  }
  changeStepQueryParams(step: number): void {
    this.router.navigate(['/utilities'], {queryParams: {step: step.toString()}});
  }
  setStepOnInit(): any {
    this.route.queryParams.subscribe(params => {
      const stepStr = params.step;
      let step = parseInt(stepStr, 10);
      if (!(step > 0) || isNaN(step)) {
        step = this.stepUtilityPageEnum.SimRegistration;
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
