import { FaGraduationCap, FaBlackTie } from 'react-icons/fa'
import { AiOutlineCode } from 'react-icons/ai'
import { SiLeetcode } from 'react-icons/si'
import { Disclosure, Transition } from '@headlessui/react'
import { HiChevronDown, HiOutlineDatabase } from 'react-icons/hi'
import { FaBaby } from 'react-icons/fa'
import { BsBuilding } from 'react-icons/bs'
import { RiDoorClosedLine } from 'react-icons/ri'
import { TbDeviceDesktopAnalytics } from 'react-icons/tb'

export default function Timeline() {
  return (
    <div>
      <ol className="relative mt-6 ml-6 border-l border-zinc-400 dark:border-gray-800 ">
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-200 ring-8 ring-white dark:bg-orange-900 dark:ring-gray-900">
            <TbDeviceDesktopAnalytics />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Undergraduate Researcher - Lead Programmer
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            June 2024
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            University of California, Riverside @ Fokwa Lab
          </p>
        </li>
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-200 ring-8 ring-white dark:bg-orange-900 dark:ring-gray-900">
            <TbDeviceDesktopAnalytics />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Summer Internship
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            June 2023
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Software Engineer Intern @ Persistent Systems
          </p>
        </li>
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-200 ring-8 ring-white dark:bg-orange-900 dark:ring-gray-900">
            <TbDeviceDesktopAnalytics />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Undergraduate Researcher - Lead Programmer
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            September 2022
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            University of California, Riverside @ Gallardo Lab
          </p>
        </li>
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-200 ring-8 ring-white dark:bg-orange-900 dark:ring-gray-900">
            <TbDeviceDesktopAnalytics />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Summer Internship
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            June 2022
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Data Science Intern (AI/ML) @ Silicon Valley Bank
          </p>
        </li>
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-200 ring-8 ring-white dark:bg-red-900 dark:ring-gray-900">
            <BsBuilding />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">Started College</h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            August 2019
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Bachelor of Science in Data Science with Specialization in AI/ML (UC Riverside)
          </p>
        </li>
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-200 ring-8 ring-white dark:bg-purple-900 dark:ring-gray-900">
            <TbDeviceDesktopAnalytics />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Returning Internship
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            June 2018
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Software Engineer Intern @ ESO Fund
          </p>
        </li>
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-200 ring-8 ring-white dark:bg-purple-900 dark:ring-gray-900">
            <TbDeviceDesktopAnalytics />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            First Internship
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            June 2017
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Software Engineer Intern @ ESO Fund
          </p>
        </li>
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <FaBaby />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">Born</h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            June 18th, 2001
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Connected to the internet
          </p>
        </li>
      </ol>
    </div>
  )
}
