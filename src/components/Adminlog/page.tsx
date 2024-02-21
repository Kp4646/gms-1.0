import React from 'react'

const AdminLog = () => {
  return (
    <form>
                  <div className="mb-8">
                    <label
                      htmlFor="code"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Enter Your Gym Code:
                    </label>
                    <input
                      type="text"
                      name="code"
                      placeholder="Enter you GYM Code"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-8 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-6">
                    <button className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                      Enter your GYM
                    </button>
                  </div>
                </form>
  )
}

export default AdminLog