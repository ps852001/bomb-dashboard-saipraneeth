import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Bedroom from "./components/Bedroom";
import BombFarms from "./components/BombFarms";
import PicTextNum from "./components/PicTextNum";
import Table from "./components/Table";
import TextImage from "./components/TextImage";

export default function Home() {
  return (
    <div className='bg-[url("/background.jpg")] min-h-screen flex flex-col justify-start items-center text-white'>
      {/* section 1: Bomb Finance Summary */}
      <div className="mx-auto my-5 flex flex-col bg-[#202543] bg-opacity-50 space-y-1 w-[1048px] h-[289px] justify-start items-center rounded-md">
        <div className="text-2xl mt-2 text-white">Bomb Finance Summary</div>
        <hr className="border-b-[0.5px] text-[#C3C5CB] w-[970px]" />
        <div className="grid grid-cols-5 gap-5 grid-rows-1">
          {/* left */}
          <div className="col-span-2 text-white ">
            {/* 
            v12 - value at row 1 col 2
            */}
            <Table
              v11="8.6M"
              v12="60.9K"
              v131="$0.24"
              v132="1.05 BTCB"
              v21="11.43M"
              v22="8.49m"
              v231="$300"
              v232="13000 BTCB"
              v31="20.00M"
              v32="175K"
              v331="$0.28"
              v332="1.15 BTCB"
            />
          </div>
          {/* center */}
          <div className="col-span-1 flex flex-col justify-center items-center">
            {/* upper */}
            <div className="flex flex-col justify-start items-center p-0 ">
              <p className="text-[20px]">Current Epoch</p>
              <p className="text-[34px]">258</p>
              <hr className="border-b-[0.5px] text-[#C3C5CB] w-[185px]" />
            </div>
            {/* middle */}
            <div className="flex flex-col justify-start items-center">
              <p className="text-[34px]">03:38:36</p>
              <p className="text-[20px]">Next Epoch in</p>
              <hr className="border-b-[0.5px] text-[#C3C5CB] w-[128px]" />
            </div>
            {/* lower */}
            <div className="flex flex-col justify-start items-center py-2">
              <p className="text-[14px]">
                Live TWAP:{" "}
                <span className="text-green-500 font-semibold text-[14px]">
                  1.17
                </span>
              </p>
              <p className="text-[14px]">
                TVL:{" "}
                <span className="text-green-500 font-semibold text-[14px]">
                  $5,002,412
                </span>
              </p>
              <p className="text-[14px]">
                Last Epoch TWAP:{" "}
                <span className="text-green-500 font-semibold text-[14px]">
                  1.22
                </span>
              </p>
            </div>
          </div>
          {/* right */}
          <div className="col-span-2 flex flex-col justify-center items-center">
            <div className="h-3/5 flex items-center justify-center">
              <div className="rounded-full w-[140px] h-[140px] bg-[#16192A] flex flex-col items-center justify-center">
                <div className="rounded-full w-[102px] h-[102px] bg-[#23284B] flex flex-col items-center justify-center">
                  <p className="text-[20px]">$10,451</p>
                  <p className="text-[16px]">+22%</p>
                </div>
              </div>
            </div>
            <div className="h-2/5 flex justify-start space-x-10">
              <div className="flex flex-col space-y-1">
                <PicTextNum pic="pictextnum/bomb.svg" t="Bomb" n="17" />
                <PicTextNum pic="pictextnum/bshares.svg" t="BShare" n="12" />
                <PicTextNum pic="pictextnum/Group 3042.svg" t="BBomb" n="20" />
              </div>
              <div className="flex flex-col space-y-1">
                <PicTextNum
                  pic="pictextnum/bomb-bitcoin-LP.svg"
                  t="Bomb-BTCB:"
                  n="17"
                />
                <PicTextNum
                  pic="pictextnum/bshare-bnb-LP.svg"
                  t="Bshare-BNB:"
                  n="17"
                />
                <PicTextNum pic ="" t="Others:" n="17" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className="flex space-x-2">
        {/* right */}
        <div className="flex flex-col space-y-2">
          {/* link */}
          <div className="flex justify-end">
            <a href="/">
              <img src="Group 2904.svg" alt="" />
            </a>
          </div>
          <div className="w-[646px] h-[40px] bg-[#00ADE8] border-[0.3px] border-[#E41A1A] flex justify-center items-center text-[24px] font-bold ">
            Invest Now
          </div>
          <div className="flex space-x-2">
            {/* discord */}
            <div className="flex space-x-1 w-[317px] h-[40px] items-center justify-center bg-gray-400 border-[0.3px] border-[#728CDF]">
              <div className="rounded-full bg-white w-[30px] h-[30px] flex items-center justify-center">
                <img className="w-[28px] h-[28px] " src="discord.svg" alt="" />
              </div>
              <p className="text-[18px] font-bold">Chat on Discord</p>
            </div>
            {/* read docs */}
            <div className="flex space-x-1 w-[317px] h-[40px] items-center justify-center bg-gray-400 border-[0.3px] border-[#728CDF]">
              <div className="rounded-full bg-white w-[30px] h-[30px] flex items-center justify-center">
                <img className="w-[23px] h-[23px] " src="docs.svg" alt="" />
              </div>
              <p className="text-[18px] font-bold">Read Docs</p>
            </div>
          </div>
          {/* Boardroom */}
          <Bedroom />
        </div>
        {/* left */}
        <div className="mx-auto flex bg-[#202543] bg-opacity-50 space-x-2 w-[382px] h-[336px] justify-start items-start rounded-md">
          <p className="text-[22px] pl-[19px] pt-[8px]">Latest News</p>
        </div>
      </div>

      {/* section 3 */}
      <div className="mx-auto my-5 flex flex-col bg-[#202543] bg-opacity-50 space-y-1 w-[1048px] h-[380px] justify-center items-start rounded-md p-[22px]">
        {/* upper */}
        <div className="flex justify-between items-center w-full">
          <div>
            <p>Bomb Farms</p>
            <p>Stake your LP tokens in our farms to start earning $BSHARE</p>
          </div>
          <div className="border border-white rounded-full flex items-center justify-center space-x-1 px-3">
            Claim All
            <img src="summary/bshares.svg" alt="" />
          </div>
        </div>
        {/* middel */}
        <div className="flex flex-col">
          {/* upper */}

          {/* lower */}
          <BombFarms />
          <hr className="border border-b-[0.5px] text-[#C3C5CB] w-[1000px] mt-2" />

          <BombFarms />
        </div>
        {/* lower */}
      </div>

      {/* section 4: Bonds */}
      <div className="mx-auto my-5 flex flex-col bg-[#202543] bg-opacity-50 space-y-1 w-[1048px] h-[186px] justify-start items-start rounded-md p-[22px]">
        <div className="flex flex-col justify-center items-start space-y-2">
          {/* upper */}
          <div className="flex items-center justify-start space-x-1">
            <img
              className="w-[48px] h-[48px] "
              src="summary/bbond.svg"
              alt=""
            />
            <div className="flex flex-col items-start justify-start">
              <p className="font-bold text-[22px]">Bonds</p>
              <p className="text-[14px]">
                BBOND can be purchased only on contraction periods, when TWAP of
                BOMB is below 1
              </p>
            </div>
          </div>
          {/* lower */}
          <div className="flex justify-between items-center space-x-20 w-[950px]">
            {/* left */}
            <div className="flex justify-center items-center">
              <div className="flex space-x-10 justify-center items-center">
                <div className="flex flex-col space-y-1">
                  <p className="text-[16px]">Current Price: (Bomb)^2</p>
                  <p className="font-bold text-[22px]">BBond = 6.2872 BTCB</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p>Available to redeem:</p>
                  <div className="flex justify-center items-center">
                    <img className="w-[39px] h-[39px] " src="summary/bbond.svg" alt="" />
                    <p className="text-[36px]">456</p>
                  </div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className=" flex flex-col">
              {/* upper */}
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[16px] font-bold">Purchase BBond</p>
                  <p className="text-[16px]">Bomb is over peg</p>
                </div>
                {/* div or button */}
                <TextImage pic="icons/shopping-cart.svg" t="Purchase" />
              </div>
              <hr className="border-b-[0.5px] text-[#C3C5CB] w-[417px]" />
              {/* lower */}
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[16px] font-bold">Redeem Bomb</p>
                  <p className="text-[16px] invisible">Bomb is over peg</p>
                </div>
                {/* div or button */}
                <TextImage pic="icons/arrow-down-circle.svg" t="Redeem" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
