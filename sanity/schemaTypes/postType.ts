// schemaTypes/post.ts
import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Articles",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titre de l'article",
      type: "string",
      description: "Le titre qui apparaîtra en haut de page.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      description:
        "Génère l'adresse de l'article (ex: histoire-du-pardailhan).",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Auteur",
      type: "string",
      initialValue: "Association Histoire et Patrimoine",
    }),
    defineField({
      name: "category",
      title: "Rubrique Principale",
      type: "string",
      options: {
        list: [
          { title: "Histoire & Patrimoine", value: "Histoire" },
          { title: "Nature & Environnement", value: "Environnement" },
          { title: "Actualités", value: "Actualités" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subTags",
      title: "Sous-sections / Mots-clés libres",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags", // Saisie libre : on tape le mot + Entrée
      },
      description: "Exemples : Baron, Grotte, Archive, Événement, XIXe...",
    }),
    defineField({
      name: "mainImage",
      title: "Image principale",
      type: "image",
      options: {
        hotspot: true, // Permet de choisir la zone de focus de l'image
      },
    }),
    defineField({
      name: "publishedAt",
      title: "Date de publication",
      type: "datetime",
      initialValue: new Date().toISOString(),
    }),
    defineField({
      name: "excerpt",
      title: "Résumé",
      type: "text",
      rows: 3,
      description: "Texte court affiché sur la page de liste des articles.",
    }),
    defineField({
      name: "body",
      title: "Contenu de l'article",
      type: "array",
      of: [
        { type: "block" }, // Texte riche (gras, liens, titres)
        { type: "image" }, // Permet d'insérer des photos dans l'article
      ],
    }),
  ],
});
