import {poppinsFont, ralewayFont} from '@/constants/style';
import {useAppStore} from '@/state-managers/app-store';
import {zodResolver} from '@hookform/resolvers/zod';
import Image from 'next/image';
import {useState} from 'react';
import {Zoom} from 'react-awesome-reveal';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
export const HomeContent = () => {
  const {myTheme} = useAppStore(state => state);

  return (
    <Zoom>
      <div className="flex flex-row items-center gap-5">
        <h2 className="text-[#0B0909] text-xl" style={{color: myTheme.text}}>
          About
        </h2>
        <span className="">
          <Image
            src={require('../../public/assets/about-line.png')}
            alt="email"
          />
        </span>
      </div>
      <div className="mt-3">
        <p
          style={{color: myTheme.text}}
          className={`${ralewayFont.className} text-[16px]`}>
          Hello there! I'm delighted to welcome you to my portfolio. As a
          passionate software developer, I thrive on exploring cutting-edge
          technologies and continually enhancing my skills. My journey in app
          and web development has been exhilarating, and I am committed to
          embracing emerging industry trends to create innovative solutions.
        </p>
      </div>

      <div className="mt-5">
        <h3 style={{color: myTheme.text}} className="text-xl mb-2">
          What i do!
        </h3>

        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className=" w-[100%] md:w-[333px] min-h-[169px] bg-[#F2F7FC] rounded-lg mt-3">
            <div className="p-3">
              <div className="flex flex-row gap-2 ">
                <span>
                  <Image
                    src={require('../../public/assets/app_icon.png')}
                    alt="app development"
                    className=""
                  />
                </span>
                <h3
                  className={`${poppinsFont.className} text-black font-bold text-lg`}>
                  App Development
                </h3>
              </div>
              <p className={`${ralewayFont.className} text-black`}>
                With a focus on user-centric design and cutting-edge
                technologies, I thrive on building intuitive and efficient apps
                that make a positive impact on people's lives. Let's turn ideas
                into reality and shape the future together.
              </p>
            </div>
          </div>
          <div className=" w-[100%] md:w-[333px] min-h-[169px] bg-[#FFEBD1] rounded-lg mt-3">
            <div className="p-3">
              <div className="flex flex-row gap-2 ">
                <span>
                  <Image
                    src={require('../../public/assets/web_icon.png')}
                    alt="web development"
                    className=""
                  />
                </span>
                <h3
                  className={`${poppinsFont.className} text-black font-bold text-lg`}>
                  Web Development
                </h3>
              </div>
              <p className={`${ralewayFont.className} text-black`}>
                As a developer, I'm passionate about harnessing the power and
                flexibility of React and Next.js to build high-performance
                applications. I continually seek innovative ways to create fast,
                scalable, and user-friendly experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export const ResumeContent = () => {
  const {myTheme} = useAppStore(state => state);
  const workSkills = [
    'Reactjs',
    'React Native',
    'NEXTjs',
    'Expo',
    'Javascript',
    'Typescript',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'NativeWind',
    'Redux',
    'Redux Toolkit',
    'Zustand',
    'Git',
  ];

  const softSkills = [
    'Time Management',
    'Flexibility',
    'Communication',
    'Problem-solving',
    'Adaptability',
    'Creativity',
    'Teamwork',
    'Project Management',
    'Leadership',
    'Critical Thinking',
    'Attention to Detail',
  ];
  return (
    <Zoom>
      <div className="flex flex-row items-center gap-5">
        <h2 className="text-xl" style={{color: myTheme.text}}>
          Resume
        </h2>
        <span>
          <Image
            src={require('../../public/assets/about-line.png')}
            alt="email"
            className=""
          />
        </span>
      </div>

      <div className="edu-exp-cont flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-20 lg:flex-wrap mt-5">
        <div className="edu">
          <div className="flex flex-row items-center gap-5">
            <h2 style={{color: myTheme.text}} className="text-xl">
              Education
            </h2>
            <span>
              <Image
                src={require('../../public/assets/edu_icon.png')}
                alt="email"
                className=""
              />
            </span>
          </div>
          <div className="w-[100%] md:w-[288.93px] min-h-[100px] bg-[#FFE3BF] rounded-lg mt-4">
            <div className="p-3">
              <p
                className={`${ralewayFont.className} text-[#1A1003] text-base`}>
                2017-2021
              </p>
              <h3
                className={`${ralewayFont.className} text-[#1A1003] text-lg font-bold`}>
                Bachelor of Science (BSC)
              </h3>
              <p className={`${ralewayFont.className} text-[#1A1003] text-lg`}>
                University of Benin (Uniben)
              </p>
            </div>
          </div>
          <div className=" w-[100%] md:w-[288.93px] min-h-[100px] bg-[#FFEED9] rounded-lg mt-4">
            <div className="p-3">
              <p
                className={`${ralewayFont.className} text-[#1A1003] text-base`}>
                2022-2023
              </p>
              <h3
                className={`${ralewayFont.className} text-[#1A1003] text-lg font-bold`}>
                Software Development
              </h3>
              <p className={`${ralewayFont.className} text-[#1A1003] text-lg`}>
                Interswitch Academy
              </p>
            </div>
          </div>

          <div className=" w-[100%] md:w-[288.93px] min-h-[100px] bg-[#F2F7FC] rounded-lg mt-4">
            <div className="p-3">
              <p
                className={`${ralewayFont.className} text-[#1A1003] text-base`}>
                2023-2023
              </p>
              <h3
                className={`${ralewayFont.className} text-[#1A1003] text-lg font-bold`}>
                Front-End Developer
              </h3>
              <p className={`${ralewayFont.className} text-[#1A1003] text-lg`}>
                Coursera
              </p>
            </div>
          </div>
        </div>

        <div className="exp">
          <div className="flex flex-row items-center gap-5">
            <h2 className="text-xl" style={{color: myTheme.text}}>
              Experience
            </h2>
            <span>
              <Image
                src={require('../../public/assets/exp_icon.png')}
                alt="email"
                className=""
              />
            </span>
          </div>

          <div className=" w-[100%] md:w-[288.93px] min-h-[100px] bg-[#FFE3BF] rounded-lg mt-4">
            <div className="p-3">
              <p
                className={`${ralewayFont.className} text-[#1A1003] text-base`}>
                2022-2023 (Contract)
              </p>
              <h3
                className={`${ralewayFont.className} text-[#1A1003] text-lg font-bold`}>
                Software Development
              </h3>
              <p className={`${ralewayFont.className} text-[#1A1003] text-lg`}>
                Interswitch Group
              </p>
            </div>
          </div>
          <div className=" w-[100%] md:w-[288.93px] min-h-[100px] bg-[#FFEED9] rounded-lg mt-4">
            <div className="p-3">
              <p
                className={`${ralewayFont.className} text-[#1A1003] text-base`}>
                2024-present
              </p>
              <h3
                className={`${ralewayFont.className} text-[#1A1003] text-lg font-bold`}>
                Software Development
              </h3>
              <p className={`${ralewayFont.className} text-[#1A1003] text-lg`}>
                Interswitch Group
              </p>
            </div>
          </div>
          <div className=" w-[100%] md:w-[288.93px] min-h-[100px] bg-[#F2F7FC] rounded-lg mt-4">
            <div className="p-3">
              <p
                className={`${ralewayFont.className} text-[#1A1003] text-base`}>
                2024-2025 (Contract)
              </p>
              <h3
                className={`${ralewayFont.className} text-[#1A1003] text-lg font-bold`}>
                Software Development
              </h3>
              <p className={`${ralewayFont.className} text-[#1A1003] text-lg`}>
                Bukinz (UK)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="work-soft mt-8 flex flex-col gap-8 lg:flex-row lg:mt-6 lg:flex-wrap">
        <div className="work  w-[100%] xl:w-[35%]">
          <h2 className="text-[#0B0909] text-xl">Work Skills</h2>

          <div className="mt-3 flex flex-row flex-wrap gap-4">
            {workSkills.map(skill => (
              <div
                className="min-w-[59px] min-h-[32px] rounded-[8px] bg-[#E1E8EF] flex justify-center items-center p-2"
                key={skill}>
                <p className={`${ralewayFont.className} text-black`}>{skill}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="soft w-[100%] xl:w-[35%]">
          <h2 className="text-[#0B0909] text-xl">Soft Skills</h2>

          <div className="mt-3 flex flex-row flex-wrap gap-4">
            {softSkills.map(skill => (
              <div
                className="min-w-[59px] min-h-[32px] rounded-[8px] bg-[#E1E8EF] flex justify-center items-center p-2"
                key={skill}>
                <p className={`${ralewayFont.className} text-black`}>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export const WorkContent = () => {
  const {setWorkNavState, workNav, myTheme} = useAppStore(state => state);
  const [state, setState] = useState<any>('');
  const workResources = [
    {
      type: 'App Development',
      name: 'Quickteller Paypoint',
      stacks: 'React native CLI',
      image: require('../../public/assets/paypoint-app.jpeg'),
      id: 1,
      category: ['app', 'all'],
      description:
        'This mobile-based platform enables registered agents to earn consistent income by offering services such as bill payments, funds transfers, cash deposits, cash withdrawals, insurance, and airtime and data recharges to customers in their communities.',
    },
    {
      type: 'App Development',
      name: 'Bukinz',
      stacks: 'React native CLI',
      image: require('../../public/assets/bukinz.png'),
      id: 2,
      category: ['app', 'all'],
      description:
        'Bukinz revolutionizes the booking experience, allowing customers to effortlessly discover and book services anytime. For merchants, Bukinz provides a comprehensive toolkit to streamline operations and manage appointments.',
    },
    {
      type: 'App Development',
      name: 'Connectly',
      stacks: 'Expo',
      image: require('../../public/assets/connectly-app.jpeg'),
      id: 3,
      category: ['app', 'all'],
      description:
        'Connectly is a mobile application designed to connect users within a specific geographical area in real-time. It enables individuals to engage with others nearby, facilitating community interactions and networking opportunities.',
    },
    {
      type: 'Web Development',
      name: 'Quickteller Paypoint',
      stacks: 'React',
      image: require('../../public/assets/paypoint-web.png'),
      id: 4,
      category: ['web', 'all'],
      description:
        'This web-based platform enables registered agents to earn consistent income by offering services such as bill payments, funds transfers, cash deposits, cash withdrawals, insurance, and airtime and data recharges to customers in their communities.',
    },
    {
      type: 'Web Development',
      name: 'Quickteller Paypoint Admin',
      stacks: 'React native CLI',
      image: require('../../public/assets/paypoint-admin.png'),
      id: 5,
      category: ['web', 'all'],
      description:
        'The Quickteller Paypoint Admin Dashboard is a comprehensive platform designed to manage and monitor all aspects related to Quickteller Paypoint agents. It facilitates efficient oversight of agent activities, transaction processing, and performance metrics.',
    },
  ];

  const handleWorkNav = (nav: string) => {
    setState('');
    setWorkNavState(nav);
  };
  return (
    <Zoom>
      <div className="flex flex-row items-center gap-5">
        <h2 style={{color: myTheme.text}} className="text-xl">
          Portfolio
        </h2>
        <span className="">
          <Image
            src={require('../../public/assets/about-line.png')}
            alt="email"
          />
        </span>
      </div>
      <div className="mt-3">
        <nav className="md:ml-18">
          <ul className="space-x-5 md:flex">
            <button
              onClick={() => handleWorkNav('all')}
              className={`${poppinsFont.className} ${
                workNav === 'all' ? 'text-[#FA5252]' : 'text-[#57657A]'
              } cursor-pointer text-base active:text-[#FA5252]`}>
              All
            </button>

            <button
              onClick={() => handleWorkNav('app')}
              className={`${poppinsFont.className} ${
                workNav === 'app' ? 'text-[#FA5252]' : 'text-[#57657A]'
              } cursor-pointer text-base active:text-[#FA5252]`}>
              App Development
            </button>

            <button
              onClick={() => handleWorkNav('web')}
              className={`${poppinsFont.className} ${
                workNav === 'web' ? 'text-[#FA5252]' : 'text-[#57657A]'
              } cursor-pointer text-base active:text-[#FA5252]`}>
              Web Development
            </button>
          </ul>
        </nav>
        {!state && (
          <div className="mt-5 flex flex-col md:flex-row flex-wrap gap-5">
            {workResources
              .filter(item => item.category.includes(workNav))
              .map(work => (
                <button
                  onClick={() => setState(work)}
                  className="width-[100%] md:w-[340px] min-h-[150px] border-1 border-[#FFE3BF] bg-[#FFE3BF] pt-[3.8px] rounded-lg cursor-pointer"
                  key={work.id}>
                  <div className="w-[99%] md:w-[330px] h-[130px] mx-auto">
                    <Image
                      src={work.image}
                      alt="work"
                      className="w-[99%] md:w-[330px] h-[130px] object-cover mx-auto rounded-lg"

                      // style={{aspectRatio: '7 / 3'}} // Replace with your image's aspect ratio
                    />
                  </div>

                  <div className="px-3">
                    <p
                      className={`${poppinsFont.className} text-[gray] text-[10px]`}>
                      {work.type}
                    </p>
                    <h3
                      className={`${poppinsFont.className} text-[#1A1003] text-[16px]`}>
                      {work.name}
                    </h3>
                  </div>
                </button>
              ))}
          </div>
        )}

        {state && (
          <Zoom>
            <div className="mt-10 flex flex-col gap-8 md:flex-row md:gap-15 w-full">
              <div className="">
                <Image
                  src={state.image}
                  alt="work"
                  className="w-[99%] md:w-[200px] h-[350px]"
                />
              </div>
              <div className="md:w-[60%]">
                <h3
                  style={{color: myTheme.text}}
                  className={`${ralewayFont.className} font-bold`}>
                  {state.name}
                </h3>

                <div className="">
                  <p
                    style={{color: myTheme.text}}
                    className={`${ralewayFont.className} mt-3`}>
                    {state.description}{' '}
                  </p>
                </div>
              </div>
            </div>
          </Zoom>
        )}
      </div>
    </Zoom>
  );
};

const contactDataSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, {message: 'required'})
    .refine(val => val.length > 1, {
      message: 'Name must be at least two characters long',
    }),
  email: z
    .string()
    .trim()
    .min(1, {message: 'required'})
    .email({message: 'invalid email address'}),
  message: z.string().min(1, {message: 'required'}),
});
export const ContactContent = () => {
  type contactDataType = z.infer<typeof contactDataSchema>;
  const {myTheme} = useAppStore(state => state);

  const [submitting, setSubmitting] = useState({
    pending: false,
    success: false,
    error: false,
  });

  const {
    reset,
    register,
    setError,
    setFocus,
    setValue,
    handleSubmit,
    formState: {errors, isSubmitting, isValid},
  } = useForm<contactDataType>({
    resolver: zodResolver(contactDataSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: contactDataType) => {
    console.log(data, 'data me');
    setSubmitting(prev => ({
      ...prev,
      pending: true,
      error: false,
    }));

    const response = await fetch('/api/routes/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result, 'resullt');
      reset({message: '', name: '', email: ''});
      setSubmitting(prev => ({
        ...prev,
        pending: false,
        success: true,
      }));

      setTimeout(async () => {
        setSubmitting(prev => ({
          ...prev,
          pending: false,
          success: false,
        }));
      }, 3000);
    } else {
      setSubmitting(prev => ({
        ...prev,
        error: true,
      }));
      setTimeout(async () => {
        setSubmitting(prev => ({
          ...prev,
          error: false,
        }));
      }, 3000);
      console.error('Error submitting data');
    }
  };
  return (
    <Zoom>
      <div className="flex flex-row items-center gap-5">
        <h2 style={{color: myTheme.text}} className="text-xl">
          Contact
        </h2>
        <span>
          <Image
            src={require('../../public/assets/about-line.png')}
            alt="email"
            className=""
          />
        </span>
      </div>

      <div className="flex flex-col gap-0 xl:gap-5 xl:flex-row xl:items-center mt-5">
        <div className="w-[100%] md:w-[288.93px] min-h-[100px] bg-[#FFE3BF] rounded-lg mt-4">
          <div className="p-3">
            <div className="flex flex-row items-center gap-3">
              <span>
                <Image
                  src={require('../../public/assets/conPhone.png')}
                  alt="contact phone"
                  className=""
                />
              </span>
              <p
                className={`${poppinsFont.className} text-[#1A1003] text-[16px]`}>
                Phone:
              </p>
            </div>

            <div className="ml-9">
              <p
                className={`${poppinsFont.className} text-[#1A1003] text-[14px]`}>
                09033662731
              </p>
              <p
                className={`${poppinsFont.className} text-[#1A1003] text-[14px]`}>
                09010214026
              </p>
            </div>
          </div>
        </div>

        <div className=" w-[100%] md:w-[288.93px] min-h-[100px] bg-[#F2F7FC] rounded-lg mt-4">
          <div className="p-3">
            <div className="flex flex-row items-center gap-3">
              <span>
                <Image
                  src={require('../../public/assets/conEmail.png')}
                  alt="contact email"
                  className=""
                />
              </span>
              <p
                className={`${poppinsFont.className} text-[#1A1003] text-[16px]`}>
                Email:
              </p>
            </div>
            <div className="ml-9">
              <p
                className={`${poppinsFont.className} text-[#1A1003] text-[14px]`}>
                destinyifehor@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[40%] w-[100%] xl:w-[61%] bg-[#F8FBFB] rounded-lg my-5 p-5 md:pr-10">
        <div>
          <p className={`${ralewayFont.className} text-[#000000] text-[16px]`}>
            I am always open to discussing{' '}
            <span className={`${ralewayFont.className} font-bold`}>
              new projects, opportunities in tech world, partnerships{' '}
            </span>{' '}
            and more so{' '}
            <span className={`${ralewayFont.className} font-bold`}>
              mentorship.
            </span>
          </p>
        </div>
        <div className="my-5">
          {submitting.success && (
            <p
              className={`${poppinsFont.className} text-green-500 text-[14px] font-bold mb-3`}>
              Submitted
            </p>
          )}
          {submitting.error && (
            <p
              className={`${poppinsFont.className} text-red-500 text-[14px] font-bold mb-3`}>
              Oops! Something went wrong. Please try again
            </p>
          )}
          <div className="mb-5">
            <p
              className={`${ralewayFont.className} text-[#000000] text-[16px] font-bold`}>
              Name:
            </p>
            <input
              type="text"
              className="border-b outline-none border-[#B5B5B5] text-[#000000] w-full"
              disabled={submitting.pending}
              {...register('name')}
            />
            {errors.name && (
              <p className="text-red-500"> {errors.name.message}</p>
            )}
          </div>
          <div className="mb-5">
            <p
              className={`${ralewayFont.className} text-[#000000] text-[16px] font-bold`}>
              Email:
            </p>
            <input
              type="email"
              className="border-b outline-none border-[#B5B5B5] text-[#000000] w-full"
              disabled={submitting.pending}
              {...register('email')}
            />
            {errors.email && (
              <p className="text-red-500"> {errors.email.message}</p>
            )}
          </div>
          <div>
            <p
              className={`${ralewayFont.className} text-[#000000] text-[16px] font-bold`}>
              Message:
            </p>
            <input
              type="text"
              className="border-b outline-none border-[#B5B5B5] text-[#000000] w-full"
              disabled={submitting.pending}
              {...register('message')}
            />
            {errors.message && (
              <p className="text-red-500"> {errors.message.message}</p>
            )}
          </div>
          <button
            className="my-5 min-w-[101px] h-[40px] rounded-[20px] border-1 border-[#EE2C0B] bg-white active:bg-[#F2F7FC] select-none px-2"
            onClick={handleSubmit(onSubmit)}
            disabled={submitting.pending}>
            <p
              className={`${ralewayFont.className} text-black text-base font-bold`}>
              {submitting.pending ? 'Submitting...' : 'Submit'}
            </p>
          </button>
        </div>
      </div>
    </Zoom>
  );
};
