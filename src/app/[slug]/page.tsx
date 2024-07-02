import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          minus magni assumenda tempora at perspiciatis consequatur quas harum
          totam, alias necessitatibus soluta dignissimos numquam autem? Optio
          nemo dolorem nesciunt animi!
        </p>
        <div className="h-[2px] bg-gray-100"></div>
        <div className="flex items-center gap-4">
          <h3 className="text-xl test-gray-500 line-through">$50</h3>
          <h2 className="font-medium text-2xl">$40</h2>
        </div>
        <div className="h-[2px] bg-gray-100"></div>
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100"/>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet explicabo molestias, fugit quaerat ex voluptatum ipsam voluptatem expedita accusamus quisquam quas facilis vel provident? Aspernatur eos quod dolor similique ea.</p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet explicabo molestias, fugit quaerat ex voluptatum ipsam voluptatem expedita accusamus quisquam quas facilis vel provident? Aspernatur eos quod dolor similique ea.</p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet explicabo molestias, fugit quaerat ex voluptatum ipsam voluptatem expedita accusamus quisquam quas facilis vel provident? Aspernatur eos quod dolor similique ea.</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
