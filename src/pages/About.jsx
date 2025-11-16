import Footer from "@/components/footer";
import StaggeredMenu from "@/components/StaggeredMenu";
import {menuItems, socialItems} from "@/config/menu";

export default function About() {
    return (
      <>       
        <div className="z-2">
          <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#000"
            openMenuButtonColor="#62929E"
            changeMenuColorOnOpen={true}
            colors={['#C8C8C8', '#94ACAC']}
            accentColor="#62929E"
            onMenuOpen={() => console.log('Menu opened')}
            onMenuClose={() => console.log('Menu closed')}
            isFixed={true}
            panelBackground="#C6C5B9"
          />
        </div> 
        <div className="bg-[#C6C5B9] min-h-screen overflow-hidden">
          <h1 className=" pt-10 text-9xl px-10 font-bold text-black ">About</h1>
          <Footer bg="bg-[#C6C5B9]" text="text-black" border="black"/>
        </div>
      </>
    );
  }