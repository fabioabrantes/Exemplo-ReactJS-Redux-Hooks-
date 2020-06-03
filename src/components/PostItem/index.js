import React,{memo} from 'react';

// import { Container } from './styles';

function PostItem({post}) {
  return (
  <li>
    <strong>{post.title}</strong>
  <p> {post.body}</p>
  </li>
    );
}
//o memo vai bloquear a renderização novamente pois nenhum estado ou propriedade foi mudada
// descarta o cenário o pai redenrizou e preciso redenrizar tb. melhorando a performance
//pois memoriza o componente.
export default memo(PostItem); 