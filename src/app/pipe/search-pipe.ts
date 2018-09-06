import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'LockFilter'
})

export class SearchPipe implements PipeTransform {
    transform(items: any[], term: string): any {
        return items.filter(item => item.name.indexOf(term) !== -1);
    }
}