import Footer from "@/components/footer";
import StaggeredMenu from "@/components/StaggeredMenu";
import {menuItems, socialItems} from "@/config/menu";

export default function Home() {
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
            colors={['#C6C5B9', '#94ACAC']}
            accentColor="#62929E"
            onMenuOpen={() => console.log('Menu opened')}
            onMenuClose={() => console.log('Menu closed')}
            isFixed={true}
            panelBackground="#C8C8C8"
          />
        </div>
        <div className="bg-[#C8C8C8] min-h-screen overflow-hidden">
          <h1 className="p-10 pt-10 text-9xl font-bold text-black ">Joey Chen</h1>
          <Footer bg="bg-[#C8C8C8]"  text="text-black" border="black"/>
        </div>
      </>
    );
  }