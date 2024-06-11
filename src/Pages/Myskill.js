import SkillBar from 'react-skillbars';

const Myskill = () =>{

    const skills = [
        { type: 'React js', level: 90, },
        { type: 'ReacNative', level: 80, },
        { type: 'node js', level: 90, },
        { type: 'HTML', level: 80,  },
        { type: 'CSS,', level: 80, },
        { type: 'JavaScript,', level: 80, },
        // { type: 'UI design in Figma', level: 60, proficiency: 'Regular' },
      ];
      const colors = {
        bar: "#3498db",
        title: {
          text: "#fff",
          background: "#2980b9"
        }
      };

    return(
        <div class="bg-[#140C2C]  text-white min-h-screen">
        <div class="p-8 ">
        <h3 class="text-3xl font-bold items-center pb-5">Languages</h3>
         <SkillBar skills={skills} colors={colors} />
        </div>
        </div>
    )
}
export default Myskill;