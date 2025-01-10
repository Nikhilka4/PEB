'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils"

export default function MultiStepForm() {
  const [step, setStep] = useState(1)
  const { register, handleSubmit, watch, control, formState: { errors }, trigger } = useForm()
  const serviceType = watch('serviceType')
  const { toast } = useToast()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data) => {
    console.log('Form submission started');
    setIsLoading(true)
    try {
      const response = await fetch('/api/submit-to-sheet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        const result = await response.json()
        toast({
          title: "Success",
          description: "Form submitted successfully!",
        })
        console.log(result)
        router.push('/home')
      } else {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to submit form')
      }
    } catch (error) {
      console.error('Error:', error)
      toast({
        title: "Error",
        description: `An error occurred while submitting the form: ${error.message}`,
      })
    } finally {
      setIsLoading(false)
    }
  }

  const nextStep = async (e) => {
    e.preventDefault(); // Prevent form submission
    let fieldsToValidate = []
    switch (step) {
      case 1:
        fieldsToValidate = ['name', 'phone']
        break
      case 2:
        fieldsToValidate = ['serviceType', 'buildingType']
        if (serviceType === 'Other') {
          fieldsToValidate.push('otherService')
        }
        break
      case 3:
        fieldsToValidate = ['height', 'width', 'length']
        break
    }

    const isStepValid = await trigger(fieldsToValidate)
    if (isStepValid) {
      setStep(prevStep => prevStep + 1)
    }
  }

  const prevStep = () => setStep(prevStep => prevStep - 1)

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-lg p-8">
      <div className="flex justify-between mb-8">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="flex items-center">
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center",
              step > num ? "bg-black text-white" : num === step ? "border-2 border-black" : "border-2 border-gray-200"
            )}>
              {step > num ? "✓" : num}
            </div>
            {num < 4 && (
              <div className={cn(
                "w-24 h-0.5",
                step > num ? "bg-black" : "bg-gray-200"
              )} />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Let's start with your name & email</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Enter your name*</Label>
                <Input
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
              </div>

              <div>
                <Label htmlFor="phone">Enter your Phone Number*</Label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                    +91
                  </span>
                  <Input
                    id="phone"
                    className="rounded-l-none"
                    {...register('phone', { 
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Please enter a valid 10-digit phone number'
                      }
                    })}
                  />
                </div>
                {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
              </div>

              <div>
                <Label htmlFor="email">Enter your email (optional)</Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email', { 
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'Invalid email address'
                    }
                  })}
                  placeholder="hello@gmail.com"
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">What can we help you with?</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            
            <div className="space-y-4">
              <Label>Service type*</Label>
              <Controller
                name="serviceType"
                control={control}
                rules={{ required: 'Please select a service type' }}
                render={({ field }) => (
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div className="flex items-center space-x-2 border rounded-lg p-4">
                      <RadioGroupItem value="PEB Structures" id="peb" />
                      <Label htmlFor="peb">PEB Structures</Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-4">
                      <RadioGroupItem value="Conventional Structures" id="conventional" />
                      <Label htmlFor="conventional">Conventional Structures</Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-4">
                      <RadioGroupItem value="ACC Cladding" id="acc" />
                      <Label htmlFor="acc">ACC Cladding</Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-4">
                      <RadioGroupItem value="Other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                )}
              />
              {errors.serviceType && <p className="text-red-500">{errors.serviceType.message}</p>}

              {serviceType === 'Other' && (
                <div>
                  <Label htmlFor="otherService">Please specify*</Label>
                  <Textarea
                    id="otherService"
                    {...register('otherService', { required: 'Please specify the other service' })}
                  />
                  {errors.otherService && <p className="text-red-500">{errors.otherService.message}</p>}
                </div>
              )}

              <div>
                <Label htmlFor="buildingType">Building type*</Label>
                <Controller
                  name="buildingType"
                  control={control}
                  rules={{ required: 'Please select a building type' }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select one..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="residential">Residential</SelectItem>
                        <SelectItem value="industrial">Industrial</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.buildingType && <p className="text-red-500">{errors.buildingType.message}</p>}
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Building Dimensions</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="height">Height of the Building (in feet)*</Label>
                <Input
                  id="height"
                  type="number"
                  {...register('height', { required: 'Height is required' })}
                />
                {errors.height && <p className="text-red-500">{errors.height.message}</p>}
              </div>

              <div>
                <Label htmlFor="width">Width of the Building (in feet)*</Label>
                <Input
                  id="width"
                  type="number"
                  {...register('width', { required: 'Width is required' })}
                />
                {errors.width && <p className="text-red-500">{errors.width.message}</p>}
              </div>

              <div>
                <Label htmlFor="length">Length of the Building (in feet)*</Label>
                <Input
                  id="length"
                  type="number"
                  {...register('length', { required: 'Length is required' })}
                />
                {errors.length && <p className="text-red-500">{errors.length.message}</p>}
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Finally, confirm your availability</h2>
            <p>When will be a good time to talk to you</p>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="availabilityDate">Select Date (optional)</Label>
                <Input
                  id="availabilityDate"
                  type="date"
                  {...register('availabilityDate')}
                />
              </div>

              <div>
                <Label htmlFor="referralSource">How did you hear about us? (optional)</Label>
                <Controller
                  name="referralSource"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select one..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="social">Social Media</SelectItem>
                        <SelectItem value="friend">Friend/Colleague</SelectItem>
                        <SelectItem value="search">Search Engine</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between pt-6">
          {step > 1 && (
            <Button type="button" variant="outline" onClick={prevStep}>
              Back
            </Button>
          )}
          {step === 1 && (
            <Button type="button" variant="outline" className="mr-auto">
              Cancel
            </Button>
          )}
          {step < 4 ? (
            <Button type="button" onClick={(e) => nextStep(e)}>
              Next
            </Button>
          ) : (
            <Button type="submit" disabled={isLoading} onClick={handleSubmit(onSubmit)}>
              {isLoading ? <Spinner className="mr-2" /> : null}
              {isLoading ? 'Submitting...' : 'Get started'}
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}

