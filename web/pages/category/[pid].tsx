import { NextPage } from "next";
import { useRouter } from "next/router";

import { routes } from "@/app/data/routes";
import LeftMenuItemPage from "@/app/components/pages/leftMenuPages/LeftMenuItemPage";
import CategoryPage from "@/app/components/pages/categoryPage/CategoryPage";
import { CategoryService } from "@/app/services/category.service";
import { ICategory } from "@/app/types/category.type";
import { useContext, useEffect } from "react";
import { CategoryContext } from "@/app/providers/categoryContextProvider";

interface IProps {
  staticCategory: ICategory;
  staticCategories: ICategory[];
}

const Category: NextPage<IProps> = ({ staticCategory, staticCategories }) => {
  const { push } = useRouter();
  const { categories, setCategories } = useContext(CategoryContext);

  useEffect(() => {
    setCategories(staticCategories);
  }, [staticCategories]);

  if (!staticCategory || !staticCategories) {
    push("/404");
  }

  return (
    <LeftMenuItemPage leftMenuItems={categories} linkTo={routes.category}>
      <CategoryPage category={staticCategory} />
    </LeftMenuItemPage>
  );
};

export default Category;

interface IServerSideProps {
  params: {
    pid: string;
  };
}

export async function getServerSideProps({
  params: { pid },
}: IServerSideProps) {
  const staticCategory = await CategoryService.get(pid);
  const staticCategories = await CategoryService.getAll();

  return { props: { staticCategory, staticCategories } };
}
