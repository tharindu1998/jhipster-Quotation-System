import { NgModule } from '@angular/core';

import { JhipsterQuotationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [JhipsterQuotationSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JhipsterQuotationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterQuotationSharedCommonModule {}
