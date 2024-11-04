// import React from "react";
// import "./Navbar.css";
// import imagem from "../../assets/images/aba.svg";
// import iconeProfile from "../../assets/images/icone-profile.png";
// import SearchIcon from '@mui/icons-material/Search';
// import NotificationsIcon from '@mui/icons-material/Notifications';

// const Navbar: React.FC = () => {
//   return (
//     <div className="navbar">
//       <div className="navbar-logo">
//         <img src={imagem} alt="" />
//         <span>Connection Labs</span>
//       </div>

//       <div className="navbar-right">
//         <div className="navbar-search">
//           <input type="text" placeholder="Pesquisar" />
//           <button>
//             <span role="img" aria-label="search-icon">
//               <SearchIcon style={{display:'flex', alignItems: 'center'}}/>
//             </span>
//           </button>
//         </div>

//         <div className="navbar-icons">
//           <span role="img" aria-label="notifications">
//             <NotificationsIcon/>
//           </span>
//         </div>

//         <div className="navbar-profile">
//           <img src={iconeProfile} alt="User Profile"/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";
// import "./Navbar.css";
// import imagem from "../../assets/images/aba.svg";
// import iconeProfile from "../../assets/images/icone-profile.png";
// import SearchIcon from '@mui/icons-material/Search';
// import NotificationsIcon from '@mui/icons-material/Notifications';

// interface NavbarProps {
//   onSearch: (searchText: string) => void;
// }

// const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
//   const [searchText, setSearchText] = useState("");

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const text = event.target.value;
//     setSearchText(text);
//     onSearch(text); // Envia o texto ao componente de card para filtro
//   };

//   return (
//     <div className="navbar">
//       <div className="navbar-logo">
//         <img src={imagem} alt="" />
//         <span>Connection Labs</span>
//       </div>

//       <div className="navbar-right">
//         <div className="navbar-search">
//           <input 
//             type="text" 
//             placeholder="Pesquisar" 
//             value={searchText} 
//             onChange={handleSearchChange} 
//           />
//           <button>
//             <SearchIcon style={{display: 'flex', alignItems: 'center'}}/>
//           </button>
//         </div>

//         <div className="navbar-icons">
//           <NotificationsIcon />
//         </div>

//         <div className="navbar-profile">
//           <img src={iconeProfile} alt="User Profile"/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import "./Navbar.css";
import imagem from "../../assets/images/aba.svg";
import iconeProfile from "../../assets/images/icone-profile.png";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

interface NavbarProps {
  onSearch: (searchText: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setSearchText(text);
    onSearch(text); // Envia o texto ao componente de card para filtro
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={imagem} alt="" />
        <span>Connection Labs</span>
      </div>

      <div className="navbar-right">
        <div className="navbar-search">
          <input 
            type="text" 
            placeholder="Pesquisar" 
            value={searchText} 
            onChange={handleSearchChange} 
          />
          <button>
            <SearchIcon style={{display: 'flex', alignItems: 'center'}}/>
          </button>
        </div>

        <div className="navbar-icons">
          <NotificationsIcon />
        </div>

        <div className="navbar-profile">
          <img src={iconeProfile} alt="User Profile"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;