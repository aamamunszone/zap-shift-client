import React from 'react';
import Container from '../../../../components/common/Container/Container';
import { Link } from 'react-router';
import { FaExternalLinkAlt } from 'react-icons/fa';

const FAQ = () => {
  return (
    <Container className="mb-30">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-secondary mb-10">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="mb-10 text-[#606060] w-1/2 mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      <div className=" w-[80%] mx-auto flex flex-col justify-between gap-5 mb-10">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            How does this posture corrector work?
          </div>
          <div className="collapse-content text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            soluta quidem animi dolore, ipsam ad voluptas quos consequuntur eius
            perspiciatis hic, iusto ipsum fugiat doloremque doloribus mollitia
            sequi, dignissimos ab iure! Pariatur magnam tempore sapiente,
            dolorum quas consequatur sint recusandae rem distinctio repellendus,
            aperiam sunt id, tenetur autem dolores! Magnam.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Is it suitable for all ages and body types?
          </div>
          <div className="collapse-content text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae tenetur odio blanditiis, ea officiis laudantium delectus
            quibusdam animi libero explicabo numquam quaerat corporis eius,
            iusto eum. At exercitationem ad laborum eaque modi! Aliquid ab
            voluptate quod, quibusdam voluptatem distinctio commodi!
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Does it really help with back pain and posture improvement?
          </div>
          <div className="collapse-content text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ut
            corporis doloremque? Harum est eaque minus, rem architecto facere
            incidunt? Fugiat voluptates corrupti dolore suscipit debitis
            praesentium rem minima ad.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Does it have smart features like vibration alerts?
          </div>
          <div className="collapse-content text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            ullam, fugit praesentium earum porro tempora blanditiis repellat sed
            qui illum dolorum eveniet a maxime expedita quas voluptas optio!
            Mollitia, temporibus ullam. Modi illum dolores eum, reiciendis harum
            nisi maiores voluptate, dolore veniam quo quia debitis quos. Tempora
            perferendis eaque inventore omnis nihil totam sed. Sit quia quaerat
            quos mollitia numquam.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            How will I be notified when the product is back in stock?
          </div>
          <div className="collapse-content text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            repudiandae nam expedita nulla, commodi ipsa unde temporibus
            ducimus? Consequatur, quae!
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Link
          to=""
          className="px-5 py-2 text-[#1F1F1F] bg-primary rounded-md font-bold flex justify-between items-center gap-2.5"
        >
          See More FAQ's{' '}
          <span>
            <FaExternalLinkAlt />
          </span>
        </Link>
      </div>
    </Container>
  );
};

export default FAQ;
