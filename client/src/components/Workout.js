import React from "react";

export default function Workout() {
    return ( 
  
        <div class="relative overflow-x-auto shadow-md sm:rounded-md w-full">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th class="px-5 py-5">
                    Workout Name
                </th>
                <th class="px-5 py-5">
                    Calories burned per Hr (Avg)
                </th>
                <th class="px-5 py-5">
                    Categories
                </th>
                <th class="px-5 py-3">
                    Add duration
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   jogging
                </th>
                <td class="px-6 py-4">
                    200
                </td>
                <td class="px-6 py-4">
                    Cardio
                </td>
                <td class="px-6 py-4">
                    Text box
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
          </tbody>
    </table>
       </div>
    )
   
}