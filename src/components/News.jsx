import React from "react";
import bottle from "./assets/bottle.png";
import lab from "./assets/lab.png";
import factory from "./assets/factory.png";

function News() {
  return (
    <div className="my-[150px] flex flex-col justify-center items-center px-4 md:px-10">
      <h3 className="font-bold text-[32px] md:text-[40px] leading-[42px] md:leading-[56px] text-black text-center">
        Новости компании
      </h3>

      <div className="flex flex-col md:flex-row gap-[24px] mt-[40px] md:mt-[80px]">
        <div className="p-[24px] border-2 border-blue-700 w-full md:w-[360px]">
          <img
            className="w-full h-auto md:w-[360px] md:h-[168px]"
            src={bottle}
            alt=""
          />
          <div>
            <h3 className="font-semibold text-[16px] leading-[22.4px] text-[rgba(51,51,51,1)] pt-[20px]">
              Est commodo nulla pulvinar amet dictumst. Tincidunt tincidunt
              interdum faucibus ipsum quis eleifend amet sit. Ac sociis sodales
              viverra viverra.
            </h3>
            <p className="font-normal text-[14px] leading-[19.6px] text-[rgba(51,51,51,1)] pt-[16px]">
              Tincidunt et ut phasellus euismod eget diam erat ultrices. Eu
              tristique diam lectus platea orci sed cras. Egestas lorem
              tincidunt pellentesque dolor vulputate lacus platea. Varius.
            </p>
          </div>
        </div>

        <div className="p-[24px] border-2 border-blue-700 w-full md:w-[360px]">
          <img
            className="w-full h-auto md:w-[360px] md:h-[168px]"
            src={factory}
            alt=""
          />
          <div>
            <h3 className="font-semibold text-[16px] leading-[22.4px] text-[rgba(51,51,51,1)] pt-[20px]">
              Sapien odio eu et quis ornare. Amet ultrices mauris pellentesque
              aliquam et. Fermentum cursus.
            </h3>
            <p className="font-normal text-[14px] leading-[19.6px] text-[rgba(51,51,51,1)] pt-[16px]">
              Lacus ut in vel blandit lectus et fermentum et vulputate. Amet
              netus gravida et facilisi sit cursus lobortis pellentesque.
              Vestibulum a pulvinar eu proin a tincidunt.
            </p>
          </div>
        </div>

        <div className="p-[24px] border-2 border-blue-700 w-full md:w-[360px]">
          <img
            className="w-full h-auto md:w-[360px] md:h-[168px]"
            src={lab}
            alt=""
          />
          <div>
            <h3 className="font-semibold text-[16px] leading-[22.4px] text-[rgba(51,51,51,1)] pt-[20px]">
              Lectus sagittis non id ut eget tellus aenean. Pretium scelerisque
              pellentesque in lacus ultrices mauris tempor. Est cursus laoreet
              in dictumst arcu.
            </h3>
            <p className="font-normal text-[14px] leading-[19.6px] text-[rgba(51,51,51,1)] pt-[16px]">
              Vestibulum id pulvinar enim molestie erat suscipit montes
              hendrerit. Integer ac egestas tempor nisl. Vel vitae quam nisi
              egestas tincidunt facilisi non faucibus. Mi sed et id.
            </p>
          </div>
        </div>
      </div>

      <button className="w-[152px] h-[52px] mt-[40px] md:mt-[80px] px-[30px] py-[15px] text-white bg-[rgba(24,64,167,1)]">
        Все новости
      </button>
    </div>
  );
}

export default News;
