import { type Metadata } from "next";
import Banner from "./components/Banner";
import HistoryCard from "./components/HistoryCard";
import TopCreatorTable from "./components/TableTopCreators";
import NftCard from "@/components/card/NftCard";

import tableDataTopCreators from "./variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "./variables/tableColumnsTopCreators";

export const metadata: Metadata = {
  title: 'NFT | UI by Nameless',
}

const NFTMarketPlacePage = () => {
  const bidders = ['/img/avatars/avatar1.png', '/img/avatars/avatar2.png', '/img/avatars/avatar3.png']

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        {/* NFt Banner */}
        <Banner />

        {/* NFt Header */}
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Trending NFTs
          </h4>
          <ul className="mt-4 flex items-center justify-between md:mt-0 md:justify-center md:!gap-5 2xl:!gap-12">
            <li>
              <a className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white" href=" ">
                Art
              </a>
            </li>
            <li>
              <a className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white" href=" " >
                Music
              </a>
            </li>
            <li>
              <a className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white" href=" " >
                Collection
              </a>
            </li>
            <li>
              <a className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white" href=" ">
                Sports
              </a>
            </li>
          </ul>
        </div>

        {/* NFTs trending card */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          <NftCard
            bidders={bidders}
            title="Abstract Colors"
            author="Esthera Jackson"
            price="0.91"
            image={'/img/nfts/Nft3.png'}
          />
          <NftCard
            bidders={bidders}
            title="ETH AI Brain"
            author="Nick Wilson"
            price="0.7"
            image={'/img/nfts/Nft2.png'}
          />
          <NftCard
            bidders={bidders}
            title="Mesh Gradients"
            author="Will Smith"
            price="2.91"
            image={'/img/nfts/Nft4.png'}
          />
        </div>

        {/* Recenlty Added setion */}
        <div className="mb-5 mt-5 flex items-center justify-between px-[26px]">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            Recently Added
          </h4>
        </div>

        {/* Recently Add NFTs */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <NftCard
            bidders={bidders}
            title="Abstract Colors"
            author="Esthera Jackson"
            price="0.91"
            image={'/img/nfts/Nft4.png'}
          />
          <NftCard
            bidders={bidders}
            title="ETH AI Brain"
            author="Nick Wilson"
            price="0.7"
            image={'/img/nfts/Nft5.png'}
          />
          <NftCard
            bidders={bidders}
            title="Mesh Gradients"
            author="Will Smith"
            price="2.91"
            image={'/img/nfts/Nft6.png'}
          />
        </div>
      </div>

      {/* right side section */}
      <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-1">
        <TopCreatorTable
          // extra="mb-5"
          tableData={tableDataTopCreators}
          columnsData={tableColumnsTopCreators}
        />
        <HistoryCard />
      </div>
    </div>
  );
};

export default NFTMarketPlacePage;
