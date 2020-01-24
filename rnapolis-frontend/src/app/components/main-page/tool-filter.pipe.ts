import {Pipe, PipeTransform} from '@angular/core';
import {Tool} from '../../entity/tool';

@Pipe({
  name: 'toolFilter',
})
export class ToolFilterPipe implements PipeTransform {

  transform(tools: Tool[], filter: string): Tool[] {
    console.log()
    if (!tools || !filter) {
      return tools;
    }
    return tools.filter(tool => tool.category.indexOf(filter) > 0);
  }
}

