import React, { useState } from 'react'
import us from '../../assets/images/us.jpg'
import { useSelector } from 'react-redux'
import ImpDesc from './ImpDesc'
import { HiMiniBuildingOffice2 } from 'react-icons/hi2'
function HotelDetail() {
  const detailData = useSelector((state) => state.detail.detailData)

  return (
    <>
      <div className='flex flex-col p-4 gap-2   bg-slate-100 md:px-36 '>
        <div className='flex md:flex-row md:items-center justify-center flex-col gap-5 w-full'>
          <div className='gap-3 h-96 flex flex-col'>
            <img src={us} className='md:w-56 h-52' />
            <img src={us} className='md:w-56 h-52' />
          </div>
          <div className='md:h-96  h-52 w-full'>
            <img src={us} className='h-full w-full' />
          </div>
        </div>

        <div className='w-full h-40 flex flex-row overflow-x-auto gap-2'>
          <img src={us} className='h-full max-w-40 w-full' />
          <img src={us} className='h-full max-w-40 w-full' />
          <img src={us} className='h-full max-w-40 w-full' />
          <img src={us} className='h-full max-w-40 w-full' />
          <img src={us} className='h-full max-w-40 w-full' />
          <img src={us} className='h-full max-w-40 w-full' />
          <img src={us} className='h-full max-w-40 w-full' />
          <img src={us} className='h-full max-w-40 w-full' />
          <img src={us} className='h-full max-w-40 w-full' />
        </div>
        <div className='flex flex-row flex-wrap  gap-2  mt-8 justify-center w-full'>
          <ImpDesc>
            <HiMiniBuildingOffice2 className='text-2xl' /> City View
          </ImpDesc>

          <ImpDesc>
            <HiMiniBuildingOffice2 className='text-2xl' />
            24 hours front desk
          </ImpDesc>
          <ImpDesc>
            <HiMiniBuildingOffice2 className='text-2xl' />
            Security
          </ImpDesc>
          <ImpDesc>
            <HiMiniBuildingOffice2 className='text-2xl' /> Air Cond
          </ImpDesc>

          <ImpDesc>
            <HiMiniBuildingOffice2 className='text-2xl' /> Safety Deposit box
          </ImpDesc>
          <ImpDesc>
            <HiMiniBuildingOffice2 className='text-2xl' />
            Pets Allowed
          </ImpDesc>
          <ImpDesc>
            <HiMiniBuildingOffice2 className='text-2xl' /> Wifi
          </ImpDesc>
          <ImpDesc>
            <HiMiniBuildingOffice2 className='text-2xl' />
            Bath
          </ImpDesc>
          <ImpDesc>
            <HiMiniBuildingOffice2 className='text-2xl' />
            Transportation
          </ImpDesc>
          <ImpDesc>
            <HiMiniBuildingOffice2 className='text-2xl' /> NO Smoking Rooms
          </ImpDesc>
        </div>

        <div>
          <p className='mt-6 font-bold text-3xl'>Description :</p>
          <div className='flex flex-col md:flex-row gap-5'>
            <p className='text-justify mt-2'>
              numquam dolorem ut minus repellendus mollitia, sint deleniti molestias nisi vel commodi. Excepturi quis
              consequuntur natus. Ipsam, totam. Provident error hic officiis eum, ex rerum possimus quas voluptates
              saepe molestiae dolorum aspernatur suscipit cupiditate impedit dolor voluptas totam reprehenderit sequi?
              Quod sapiente obcaecati ipsa reiciendis pariatur? Delectus perspiciatis, Omnis quo at fuga blanditiis?
              Blanditiis voluptatem repellat reprehenderit corrupti soluta numquam atque optio laudantium vitae incidunt
              nesciunt et, dicta eum dolore ipsum quibusdam placeat. Consectetur, soluta nostrum voluptatem iure aliquid
              voluptates, impedit, neque tempore maiores temporibus praesentium eaque omnis. Delectus tempora a magnam
              nemo voluptates modi optio sunt aut nam sapiente est, beatae eos. Repellendus officiis esse autem eligendi
              labore consectetur nulla modi natus eveniet, fuga officia minus ad nostrum, eos, libero illum tempora
              molestiae accusantium tempore odio delectus? Facilis minima nisi impedit eum. Esse possimus dolor
              temporibus fugit amet non provident, cum et atque maiores corporis, fuga facilis deleniti minus qui nisi
              tempora iusto deserunt corrupti eos impedit? Ipsa impedit provident neque iusto. Ullam reprehenderit
              laborum maxime delectus doloribus perspiciatis tempore odit iusto magnam ipsum, velit quis modi, accusamus
              ad atque voluptates quo omnis corporis distinctio earum magni iure similique error. Nihil, culpa. Animi
              quod, quos voluptatum qui molestias perferendis quam corrupti, eligendi excepturi corporis voluptatem
              voluptates iusto consequuntur, facere laborum dolorum? Sunt illum ut porro ipsam doloribus, tempore quo
              explicabo error facilis! Fugit tempore officiis facilis exercitationem dicta officia quo totam sequi
              explicabo illum ipsum corrupti consequatur, quidem ratione eligendi labore sapiente tenetur itaque. Qui,
              velit assumenda ipsa deleniti debitis maiores quibusdam. Labore repudiandae, repellat aspernatur dolor
              recusandae quae necessitatibus tenetur eius voluptates doloremque error sequi, veritatis et, dolorum
              ullam. Quia architecto at pariatur reprehenderit incidunt error debitis repudiandae ut, numquam maiores.
              doloribus. Unde odit velit excepturi, distinctio nobis accusamus voluptatem! Ipsum dolores mollitia eius,
              inventore odio maiores ipsa vero est in ex, laudantium temporibus quibusdam tempore dicta reiciendis enim
              animi ullam itaque! Eveniet vel, assumenda natus necessitatibus odit dolores, esse repudiandae reiciendis
              sed nesciunt officiis earum atque inventore adipisci praesentium tenetur. Sunt, sapiente nisi? Corrupti,
              temporibus. Qui perferendis dolorum consequuntur laudantium tempora.
            </p>

            <div className='shadow-xl bg-yellow-400 shadow-yellow-400 md:min-w-80 p-3 rounded-xl flex flex-col gap-5  justify-center w-full'>
              <p className='font-bold text-center'>{detailData.title}</p>
              <p className='font-bold  mt-3'>
                Check-In:- <span className='font-normal'>03-03-2024</span>
              </p>
              <p className='font-bold'>
                Check-Out:- <span className='font-normal'>06-03-2024</span>
              </p>
              <p className='font-bold'>
                No of Persons:-
                <span className='font-normal'>{detailData.userId}</span>
              </p>
              <p className='font-bold'>
                No of Rooms:-
                <span className='font-normal'>{detailData.id}</span>
              </p>
              <p className='font-bold'>
                Address:-
                <span className='font-normal'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laboriosam quibusdam, similique
                  repellat natus ratione. Vero, consequatur recusandae! Omnis libero laudantium, consectetur sunt
                  assumenda nesciunt. Nam et sunt ex rem.
                </span>
              </p>

              <button className='text-center w-full bg-blue-950 p-4 rounded-full  text-white font-bold text-xl'>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HotelDetail
