console . log ( 'Digite 1 para Sim e 0 para Não, para as seguintes perguntas:' ) ;
let  pergunta1  =  + prompt ( 'Você telefonou para a vítima?' ) ;

deixar  pergunta2  =  + prompt ( 'Você esteve no local do crime?' ) ;

let  pergunta3  =  + prompt ( 'Você mora perto da vítima?' ) ;

let  pergunta4  =  + prompt ( 'Você devia para a vítima?' ) ;

let  pergunta5  =  + prompt ( 'Você já está com a vítima?' ) ;


if ( pergunta1  +  pergunta2  +  pergunta3  +  pergunta4  +  pergunta5  ==  5 ) {
  console . log ( 'Resultado: Você é o Assassino (a)!' )
} 
else  if ( pergunta1  +  pergunta2  +  pergunta3  +  pergunta4  +  pergunta5  ==  0 ) {
  console . log ( 'Resultado: Você é Inocente!' )
}
else  if ( pergunta1  +  pergunta2  +  pergunta3  +  pergunta4  +  pergunta5  ==  2 ) {
  console . log ( 'Resultado: Você é Suspeito (a)!' )
}
else  if ( pergunta1  +  pergunta2  +  pergunta3  +  pergunta4  +  pergunta5  ==  3  || 4 ) {
  console . log ( 'Resultado: Você é Cúmplice!' ) }
