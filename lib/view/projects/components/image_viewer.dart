import 'package:photo_view/photo_view.dart';
import 'package:flutter/material.dart';

class ImageViewer {
  ImageViewer(BuildContext context, String image) {
    showGeneralDialog(
      barrierColor:
          Colors.black.withOpacity(0.7), // Add some transparency to the barrier
      transitionDuration: const Duration(milliseconds: 500),
      barrierDismissible: true,
      barrierLabel: 'Barrier',
      context: context,
      pageBuilder: (context, animation, secondaryAnimation) {
        return Center(
          child: Hero(
            tag: 'IMAGEVIEW',
            child: Scaffold(
              appBar: AppBar(
                backgroundColor: Colors.black,
                leading: IconButton(
                  icon: const Icon(Icons.arrow_back),
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                ),
              ),
              backgroundColor: Colors.black,
              body: InkWell(
                onTap: () {
                  Navigator.of(context).pop();
                },
                child: PhotoView(
                  imageProvider: AssetImage(image),
                  backgroundDecoration:
                      const BoxDecoration(color: Colors.black),
                ),
              ),
            ),
          ),
        );
      },
    );
  }
}
