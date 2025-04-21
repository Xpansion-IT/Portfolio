import {
  AbstractIntlMessages,
  NamespaceKeys,
  NestedKeyOf,
  useTranslations,
} from "next-intl";

export type TFunction<
  NestedKey extends NamespaceKeys<
    AbstractIntlMessages,
    NestedKeyOf<AbstractIntlMessages>
  > = never
> = ReturnType<
  typeof useTranslations<
    NestedKey extends never ? NestedKeyOf<AbstractIntlMessages> : NestedKey
  >
>;
