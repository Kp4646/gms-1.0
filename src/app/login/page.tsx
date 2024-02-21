import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import Header from '@/components/Header'


const page = () => {
  return (
    <>


    <Header/>
    <section className="relative z-10 overflow-hidden pb-16 pt-10 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three mx-auto max-w-[500px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Log in to your account
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  First Select What's Your Role?
                </p>
                
                <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="Member">Member</TabsTrigger>
            <TabsTrigger value="Admin">Admin</TabsTrigger>
            <TabsTrigger value="Owner">Owner</TabsTrigger>
        </TabsList>
        <TabsContent value="Member">
            <Card>
            <CardHeader>
                <CardTitle>Member Login</CardTitle>
                <CardDescription>
                Enter your Credentials
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                
                <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder='Your username' />
                </div>
                <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder='Your password' type="password" />
                </div>
            </CardContent>
            <CardFooter>
                <Button className='w-full'>Login</Button>
            </CardFooter>
            </Card>
        </TabsContent>

        <TabsContent value="Admin">
            <Card>
            <CardHeader>
                <CardTitle>Admin Login</CardTitle>
                <CardDescription>
                Enter your Credentials
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                
                <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder='Your username' />
                </div>
                <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder='Your password' type="password" />
                </div>
            </CardContent>
            <CardFooter>
                <Button className='w-full'>Login</Button>
            </CardFooter>
            </Card>
        </TabsContent>

        <TabsContent value="Owner">
            <Card>
            <CardHeader>
                <CardTitle>Owner Login</CardTitle>
                <CardDescription>
                Enter your Credentials
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                
                <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder='Your username' />
                </div>
                <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder='Your password' type="password" />
                </div>
            </CardContent>
            <CardFooter>
                <Button className='w-full'><Link href="/dashboard">Login as Owner</Link> </Button>
            </CardFooter>
            <p className="text-center text-base font-medium text-body-color pb-5">
                  Not Registered your Gym Yet?<br />{" "} 
                  <Link href="/login" className="text-primary hover:underline">
                    Register NOW!
                  </Link> 
                 </p> 
            </Card>
            
        </TabsContent>

        </Tabs>

                {/* <form>
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
                <p className="text-center text-base font-medium text-body-color">
                  Don’t you have an account?{" "}
                  <Link href="/login" className="text-primary hover:underline">
                    Sign up
                  </Link> */}
                {/* </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page