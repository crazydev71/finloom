import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'positiondetailfilter',
    pure: false
})
export class PositionDetailFilterPipe implements PipeTransform {
    transform(items: any[], field: string, value: any): any[] {
        if (!items || value == null) return items;
        if (value != null) {
            var val = value.formatted;
            return items.filter(it => it[field] == val);
        }

    }

}