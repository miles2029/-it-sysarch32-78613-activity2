import aangImage  from './assets/aang.jpg'
import kataraImage from './assets/katara.png'
import sokkaImage from './assets/sokka.jpg'
import tophImage from'./assets/toph.jpg'
import sukiImage from './assets/suki.jpeg'
import princezukoImage  from './assets/Prince_Zuko.jpg'
import Card from './card.jsx'


function StudentComponent() {
      const studentInfo = [
            { id: 1, imgUrl: kataraImage  , name: "Katara Windsor", email: "katarawindsor@gmail.com"},
            { id: 2, imgUrl: aangImage ,name: "Aang", email: "aangtwinkletoes@gmail.com", },
            { id: 3, imgUrl: sokkaImage, name: "Sokka", email: "sokka@gmail.com",  },
            { id: 4, imgUrl: tophImage, name: "Toph", email: "toph@gmail.com",  },
            { id: 5, imgUrl: sukiImage, name: "Suki", email: "suki@example.com"},
            { id: 6, imgUrl: princezukoImage,name: "Prince Zuko", email: "princezuko@gmail.com.com",  }


        ];
         return (
            <div className='card-container'>
                  {studentInfo.map((student, index) => (
                     <Card 
                           key = {index}
                           id={student.id}
                           img={student.imgUrl}
                           name={student.name}
                           email={student.email}
                        />
                     ))
                  }
          </div>
         )
      }
            



export default StudentComponent;