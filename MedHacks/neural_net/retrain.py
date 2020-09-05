import cxr_dataset as CXR
import eval_model as E
import model as M
import filter_data 


PATH_TO_IMAGES = "/Users/gurman/Desktop/MedHacks/neural_net/starter_images"
WEIGHT_DECAY = 1e-4
LEARNING_RATE = 0.01
preds, aucs = M.train_cnn(PATH_TO_IMAGES, LEARNING_RATE, WEIGHT_DECAY)

