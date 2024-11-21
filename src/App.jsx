
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar'
import Footer from './components/Footer/Footer'
import Toggle from './components/Toggle/Toggle'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [coin, setCoin] = useState(0)
  const claimFreeCredit = () => {
    const newCoin = coin + 900000;
    creditNotification();
    setCoin(newCoin)

  }

  const toggle = () => {
    console.log('Hello I am toggle');
  }
  const [isActive, setisActive] = useState({
    available: true,
    status: "available",
    isPlayerVisible: true
  })

  const handleToggleState = (status) => {
    if (status == "available") {
      setisActive({
        available: true,
        status: "available",
        isPlayerVisible: true
      })
    }
    else {
      setisActive({
        available: false,
        status: "select",
        isPlayerVisible: false
      })

    }
  }

  const [players, setPlayers] = useState([])
  const choosePlayer = player => {
    const { biddingPrice, name, playerId } = player;
    const playerExists = players.some(p => p.playerId === player.playerId)
    if (!playerExists) {
      if (players.length < 6) {
        if (coin >= biddingPrice) {
          const newcoin = coin - biddingPrice;
          setCoin(newcoin);
          const newplayers = [...players, player];
          setPlayers(newplayers);
          successNotification(name);
        }
        else {
          notEnoughtCoin();
        }

      }
      else {
        notMoreplayers();
        return;
      }
    }
    else {
      existPlayer();
      return;
    }

  }
  const itemDelete = (playerId) => {
    const remainItem = players.filter(player => player.playerId !== playerId);
    removePlayer();
    setPlayers(remainItem);
  }
  const successNotification = (name) => {
    toast.success(`Congrats!! ${name} is now in your Squad`, {
      position: "top-center"
    });
  }
  const creditNotification = () => {
    toast.success("Credit Added to your Account", {
      position: "top-center"
    });
  }
  const notEnoughtCoin = () => {
    toast.error("Not enough money to buy this player. Please claim some credit", {
      position: "top-center"
    });
  }
  const existPlayer = () => {
    toast.error("Player Already Selected", {
      position: "top-center"
    });
  }
  const removePlayer = () => {
    toast.warn("Player Removed", {
      position: "top-right"
    });
  }
  const notMoreplayers = () => {
    toast.error("More than six players not allowed", {
      position: "top-right"
    });
  }
  return (
    <>
      <Navbar coinUpdate={coin}></Navbar>
      <Banner claimFreeCredit={claimFreeCredit} ></Banner>
      <Toggle itemDelete={itemDelete} toggle={toggle} players={players} choosePlayer={choosePlayer} setisActive={setisActive} isActive={isActive} handleToggleState={handleToggleState}></Toggle>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
