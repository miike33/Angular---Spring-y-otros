import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Pipe({
  name: 'usersFilter'
})
export class UsersFilterPipe implements PipeTransform {

  transform(usuarios: Usuario[], filterBy: string): Usuario[] {
    const filter = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filter ? usuarios.filter(user => user.nombre.toLocaleLowerCase().includes(filter)) : usuarios;
}

}
