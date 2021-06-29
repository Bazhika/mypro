





const option1=document.querySelector('.option1'),
option2=document.querySelector('.option2'),
option3=document.querySelector('.option3'),
option4=document.querySelector('.option4');


const optionElements=document.querySelectorAll('.option');

const question=document.getElementById('question'),
    numberOfQuestion=document.getElementById('number-of-question'),
    numberOfAllQuestion=document.getElementById('number-of-all-questions');

    let indexOfQuestion,
        indexOfPage=0;    //проверено

    const answersTracker=document.getElementById('answers-tracker');
    const btnNext=document.getElementById('btn-next');

    let score=0;

    const correctAnswer=document.getElementById('correct-answer'),
    numberOfAllQuestion2=document.getElementById('number-of-all-questions-2'),
    btnTruAgain=document.getElementById('btn-try-again'); //проверено


    const questions=[
        {
            question:'Вредоносная программа - это…',
            options: [
                'программа, специально разработанная для нарушения нормального функционирования систем',
                ' упорядочение абстракций, расположение их по уровням',
                'процесс разделения элементов абстракции, которые образуют ее структуру и поведение',
                'нет правильного ответа',
            ],
            rightAnswer: 0

    }, 
    {
      question:'Программные средства – это…',
      options: [
          ' специальные программы и системы защиты информации в информационных системах различного назначения ',
          'структура, определяющая последовательность выполнения и взаимосвязи процессов, действий и задач на протяжении всего жизненного цикла',
          'модель знаний в форме графа в основе таких моделей лежит идея о том, что любое выражение из значений можно представить в виде совокупности объектов и связи между ними',
          'нет правильного ответа',
      ],
      rightAnswer: 0

}, 

{
            question:'Какие бывают вредоносные программы… ',
            options: [
                'морской конек',
                'троянский подарок',
                'троянский конь',
                'нет правильного ответа',
            ],
            rightAnswer: 2

    } ,        
    {
        question:'Защита информации это ',
        options: [
            'комплекс мероприятий, направленных на обеспечение информационной безопасности.',
            'процесс разработки структуры базы данных в соответствии с требованиями пользователей',
            'небольшая программа для выполнения определенной задачи',
            'нет правильного ответа',
        ],
        rightAnswer: 0

}  ,

{
    question:'Ошибка - это',
    options: [
        'неправильное выполнение элементом одной или нескольких функций происходящее в следствии специфического состояния',
        'нарушение работоспособности элемента системы, что приводит к невозможности выполнения им своих функций',
        'негативное воздействие на программу',
        'нет правильного ответа',
    ],
    rightAnswer: 0

} ,

{
    question:'Черви – это… ',
    options: [
        'код способный самостоятельно, то есть без внедрения в другие программы вызывать распространения своих копий по И.С. и их выполнения',
        'код обладающий способностью к распространению путем внедрения в другие программы',
        'программа действий над объектом или его свойствами',
        'нет правильного ответа',
    ],
    rightAnswer: 0

} ,


{
    question:'Вирус- это… ',
    options: [
        'код обладающий способностью к распространению путем внедрения в другие программы',
        'способность объекта реагировать на запрос сообразно своему типу, при этом одно и то же имя метода может использоваться для различных классов объектов',
        'небольшая программа для выполнения определенной задачи',
        'нет правильного ответа',
    ],
    rightAnswer: 0

} ,
{
    question:'Что поможет вылечить компьютер ',
    options: [
        'антивирусная программа',
        'чудо-таблетки',
        'отключение питания',
        'нет правильного ответа',
    ],
    rightAnswer: 0

} ,
{
    question:'Под информационной безопасностью понимается…… ',
    options: [
        'защищенность информации и поддерживающей инфраструктуры от случайных или преднамеренных воздействий естественного или случайного характера, которые могут нанести неприемлемый ущерб субъектам информационных отношений в том числе владельцам и пользователям информации и поддерживающей инфраструктуре.',
        'программный продукт и базы данных должны быть защищены по нескольким направ­лениям от воздействия',
        'нет апрвильного ответа',
        'все ответы верные',
    ],
    rightAnswer: 0

} 



    


    ]; //проверено

    numberOfAllQuestion.innerHTML=questions.length

    const load=()=>{
        question.innerHTML=questions[indexOfQuestion].question;

        option1.innerHTML=questions[indexOfQuestion].options[0];
        option2.innerHTML=questions[indexOfQuestion].options[1];
        option3.innerHTML=questions[indexOfQuestion].options[2];
        option4.innerHTML=questions[indexOfQuestion].options[3];

        numberOfQuestion.innerHTML=indexOfPage + 1;
        indexOfPage++; 

    };

    let completedAnswers=[];

      const randomQuestion=()=>{
           let randomNumber=Math.floor(Math.random()* questions.length);
           let hitDuplicate=false;
           if (indexOfPage==questions.length){
                      quizOver();
                  } else {
                      if(completedAnswers.length>0){
                          completedAnswers.forEach(item=>{
                              if(item ==randomNumber){
                                  hitDuplicate=true;
                              }
                          }); //проверено
                          if(hitDuplicate){
                              randomQuestion();
                          } else{
                              indexOfQuestion=randomNumber;
                              load();
    
    
                          }
                          };
    
                              if(completedAnswers == 0){
                                  indexOfQuestion=randomNumber;
                                  load();
                              
                          }
                      };
                      completedAnswers.push(indexOfQuestion);
    
                  };// проверено

                  const checkAnswer = el => {
                      if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer){
                          el.target.classList.add('correct');
                          updateAnswerTracker('correct')
                          score++;
                      } else{
                          el.target.classList.add('wrong');
                          updateAnswerTracker('wrong');
                      }
                      disabledOptions();
                  }

     const disabledOptions = () =>{
         optionElements.forEach(item=>{
             item.classList.add('disabled');
             if (item.dataset.id==questions[indexOfQuestion].rightAnswer){
                 item.classList.add('correct');
             }
         })
     }

     const enableOptions = () => {
         optionElements.forEach(item =>{
             item.classList.remove('disabled', 'correct', 'wrong');
         })
     };

     const answerTracker = () =>{
         questions.forEach(() =>{
             const div = document.createElement('div');
             answersTracker.appendChild(div);
         })
     };

     const updateAnswerTracker = status =>{
         console.log(answersTracker.children);
         answersTracker.children[indexOfPage-1].classList.add(`${status}`);
     };
     const validate = () =>{
         if(!optionElements[0].classList.contains('disabled')){
             alert('вам нужно выбрать один из вариантов ответа');
         } else {
             randomQuestion();
             enableOptions();
         }
     };

     btnNext.addEventListener('click', validate);

for (option of optionElements){
    option.addEventListener('click', e=> checkAnswer(e));
}
              const quizOver=() =>{
                  document.querySelector('.quiz-over-modal').classList.add('active');
                  correctAnswer.innerHTML=score;
                  numberOfAllQuestion2.innerHTML = questions.length
                  
              };

              const tryAgain = () =>{
                  window.location.reload();
              };

              btnTruAgain.addEventListener('click', tryAgain);

    window.addEventListener('load', ()=>{
        randomQuestion();
        answerTracker();
    })