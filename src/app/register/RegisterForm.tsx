'use client';

import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Button from '@/components/buttons/Button';
import Input from '@/components/Input';
import api from '@/lib/api';
import { ApiError } from '@/types/api';
import { RegisterProps } from '@/types/auth';

export default function RegisterForm({
  userRole,
}: {
  userRole: 'konsumen' | 'restoran';
}) {
  const methods = useForm<RegisterProps>();
  const { handleSubmit } = methods;
  const router = useRouter();

  const { mutate, isPending } = useMutation<
    AxiosResponse,
    AxiosError<ApiError>,
    RegisterProps
  >({
    mutationFn: async (data) => {
      return api.post(`/${userRole}/register`, data);
    },
    onSuccess: () => {
      toast.success('Register success');
      if (userRole === 'konsumen') router.push('/login/customer');
      else router.push('/login/restaurant');
    },
    onError: (error) => {
      toast.error(error.response?.data.message || 'An error occurred');
    },
  });

  const onSubmit: SubmitHandler<RegisterProps> = (data) => {
    mutate(data);
    1;
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex w-[300px] flex-col gap-6 max-[300px]:w-[200px] sm:w-[400px] min-[1300px]:w-[500px]'
      >
        <Input
          id='email'
          label='Email'
          validation={{
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Invalid email address',
            },
          }}
          placeholder='Enter your email'
        />
        <Input
          id='password'
          label='Password'
          type='password'
          validation={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
          }}
          placeholder='Enter your password'
        />
        {userRole === 'konsumen' && (
          <Input
            id='nama'
            label='Name'
            validation={{
              required: 'Nama is required',
            }}
            placeholder='Enter your name'
          />
        )}
        {userRole === 'restoran' && (
          <>
            <Input
              id='nama'
              label='Restaurant Name'
              validation={{
                required: 'Nama instansi is required',
              }}
              placeholder='Enter your restaurant name'
            />
            <Input
              id='alamat'
              label='Address'
              validation={{
                required: 'Alamat is required',
              }}
              placeholder='Enter your restaurant address'
            />
          </>
        )}
        <Button type='submit' isLoading={isPending}>
          Register
        </Button>
      </form>
    </FormProvider>
  );
}
