import clsx from "clsx";

function Skeleton({ row }: { row: number}) {
  return (
    <div className="bg-white h-fit animate-pulse grid grid-cols-tableGridXs lg:grid-cols-tableGrid gap-2 rounded-lg mb-1 items-center">
      <div className='sticky rounded-l-lg overflow-hidden bg-white flex items-center left-1 min-w-[200px] h-full pl-3 pr-2'>
        <div className={clsx('h-4 bg-gray-200 leading-[48px] rounded-full min-w-[40px]',
          row % 1 === 0 && 'w-2/4',
          row % 2 === 0 && 'w-3/4',
          row % 3 === 0 && 'w-2/3',
          row % 5 === 0 && 'w-2/4',
          row % 7 === 0 && 'w-2/5',
          row % 8 === 0 && 'w-4/6',
        )}
        ></div>
      </div>
      <div className="min-w-[200px]">
        <div className="h-7 my-2 bg-gray-200 rounded-md w-28"></div>
      </div>
      <div>
        <div className="h-7 my-2 bg-gray-200 rounded-md w-24"></div>
      </div>
      <div>
        <div className={clsx('h-4 my-2 bg-gray-200 rounded-full min-w-[20px]',
          row % 1 === 0 && 'w-2/4',
          row % 2 === 0 && 'w-3/4',
          row % 3 === 0 && 'w-2/3',
          row % 5 === 0 && 'w-2/4',
          row % 7 === 0 && 'w-2/5',
          row % 8 === 0 && 'w-4/6',
        )}
        ></div>
      </div>
      <div>
        <div className="h-4 my-2 bg-gray-200 rounded-full w-12"></div>
      </div>
      <div>
        <div className="h-4 my-2 bg-gray-200 rounded-full w-12"></div>
      </div>
      <div>
        <div className="h-4 my-2 bg-gray-200 rounded-full w-12"></div>
      </div>
      <div>
        <div className="h-6 my-2 bg-gray-200 rounded-md w-6"></div>
      </div>
    </div>
  );
}

export default Skeleton;
