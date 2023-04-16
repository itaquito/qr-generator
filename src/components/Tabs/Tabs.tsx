"use client";

import type { setTextType } from "@/util/listOfTabs";

import { Tab } from "@headlessui/react";

import { listOfTabs } from "@/util/listOfTabs";

interface TabsProps {
  setText: setTextType;
}

function Tabs({ setText }: TabsProps) {
  return (
    <Tab.Group
      className="flex space-x-4"
      as="div"
      vertical
    >
      <Tab.List className="flex flex-col space-y-4 font-bold">
        {listOfTabs.map((e, i) => (
          <Tab
            className={({ selected }) => `p-2 text-left border-l-4 border-primary rounded shadow transition-all ${selected ? "bg-primary text-white" : "bg-white hover:bg-indigo-100"}`}
            title={e.description}
            key={i}
          >
            {e.name}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="w-full">
        {listOfTabs.map((e, i) => (
          <Tab.Panel
            className="p-2 bg-white rounded shadow"
            key={i}
          >
            <h1 className="px-4 border-l-4 border-primary text-3xl font-bold text-primary rounded">{e.name}</h1>
            <p className="my-2 text-justify">{e.description}</p>
            <e.Component setText={setText} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

export default Tabs;
