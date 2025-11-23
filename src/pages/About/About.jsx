import React from 'react';
import Container from '../../components/common/Container/Container';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const About = () => {
  return (
    <div className="mb-6">
      <title>ZapShift | About Us</title>

      {/* About Us Section */}
      <section>
        <Container className="rounded-xl bg-base-100 px-24 py-20">
          <div>
            <h2 className="text-secondary text-4xl font-extrabold tracking-wide mb-8">
              About Us
            </h2>
            <p className="mb-14">
              Enjoy fast, reliable parcel delivery with real-time tracking and
              zero hassle. From personal packages to business shipments — we
              deliver on time, every time.
            </p>
          </div>

          {/* Divider */}
          <div className="border-b border-gray-300"></div>

          <div className="mt-14 min-h-[30vh]">
            <Tabs>
              <TabList className="flex gap-10 pb-3">
                <Tab
                  className="cursor-pointer text-gray-600 pb-1"
                  selectedClassName="text-secondary font-bold border-b-2 border-primary"
                >
                  Story
                </Tab>
                <Tab
                  className="cursor-pointer text-gray-600 pb-1"
                  selectedClassName="text-secondary font-bold border-b-2 border-primary"
                >
                  Mission
                </Tab>
                <Tab
                  className="cursor-pointer text-gray-600 pb-1"
                  selectedClassName="text-secondary font-bold border-b-2 border-primary"
                >
                  Success
                </Tab>
                <Tab
                  className="cursor-pointer text-gray-600 pb-1"
                  selectedClassName="text-secondary font-bold border-b-2 border-primary"
                >
                  Team & Others
                </Tab>
              </TabList>

              <TabPanel>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo ex recusandae eius quo, modi enim consequuntur fuga,
                  unde, ad delectus aliquam ullam adipisci et magni atque vitae
                  impedit obcaecati. Minus recusandae debitis maxime repellendus
                  explicabo. <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo ex recusandae eius quo, modi enim consequuntur fuga,
                  unde, ad delectus aliquam ullam adipisci et magni atque vitae
                  impedit obcaecati. Minus recusandae debitis maxime repellendus
                  explicabo. <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo ex recusandae eius quo, modi enim consequuntur fuga,
                  unde, ad delectus aliquam ullam adipisci et magni atque vitae
                  impedit obcaecati. Minus recusandae debitis maxime repellendus
                  explicabo.
                </p>
              </TabPanel>
              <TabPanel>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repudiandae in nam hic consequuntur facere, earum ut
                  consequatur nihil voluptates aperiam illum nemo blanditiis
                  perferendis atque amet, tempore dolor praesentium qui? Saepe
                  porro illum omnis dignissimos veritatis, asperiores enim nemo
                  sunt expedita provident similique et tenetur itaque modi quod.
                  Officia possimus tenetur cupiditate voluptas dolorem expedita
                  quisquam, dicta autem corrupti voluptatem? Nihil error
                  obcaecati voluptatibus a. <br />
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repudiandae in nam hic consequuntur facere, earum ut
                  consequatur nihil voluptates aperiam illum nemo blanditiis
                  perferendis atque amet, tempore dolor praesentium qui? Saepe
                  porro illum omnis dignissimos veritatis, asperiores enim nemo
                  sunt expedita provident similique et tenetur itaque modi quod.
                  Officia possimus tenetur cupiditate voluptas dolorem expedita
                  quisquam, dicta autem corrupti voluptatem? Nihil error
                  obcaecati voluptatibus a.
                </p>
              </TabPanel>
              <TabPanel>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, aspernatur! Exercitationem laborum sit rerum
                  ullam quaerat facilis repudiandae odit quas perspiciatis
                  labore, sequi tempora eum quam ratione perferendis totam
                  minima impedit. Placeat, eum voluptatem, debitis id repellat
                  enim magnam, labore quod excepturi iste voluptates! <br />
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, aspernatur! Exercitationem laborum sit rerum
                  ullam quaerat facilis repudiandae odit quas perspiciatis
                  labore, sequi tempora eum quam ratione perferendis totam
                  minima impedit. Placeat, eum voluptatem, debitis id repellat
                  enim magnam, labore quod excepturi iste voluptates!
                </p>
              </TabPanel>
              <TabPanel>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores mollitia temporibus commodi totam praesentium minima,
                  possimus repudiandae repellat illum atque voluptate aspernatur
                  corrupti modi laboriosam eius illo. Aspernatur, architecto?
                  Praesentium perferendis, debitis facilis dolores voluptatibus
                  provident saepe aut nobis reiciendis commodi quidem sed
                  deleniti vero. Excepturi incidunt repellendus vero
                  exercitationem vel, doloribus delectus sunt voluptates
                  reiciendis, earum voluptatibus, inventore sit. Repellat
                  deserunt ex voluptatibus! <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores mollitia temporibus commodi totam praesentium minima,
                  possimus repudiandae repellat illum atque voluptate aspernatur
                  corrupti modi laboriosam eius illo. Aspernatur, architecto?
                </p>
              </TabPanel>
            </Tabs>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;
